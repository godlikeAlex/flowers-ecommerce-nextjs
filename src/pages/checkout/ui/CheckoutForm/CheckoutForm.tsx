import { Controller, FieldErrors, useFormContext } from "react-hook-form";
import {
  Anchor,
  DayPicker,
  GooglePlaces,
  Input,
  InputLabel,
  Textarea,
  TimeSlots,
} from "@/shared/ui";

import type {
  DeliveryForm,
  CheckoutForm as ICheckoutForm,
} from "../../model/checkout-schema";
import { ROUTES, US_TELEPHONE_MASK } from "@/shared/config";
import { useCreateOrder } from "@/features/order";
import {
  combineDateTimeToUTC,
  getDateInNY,
  getMinSelectableDateNY,
} from "@/shared/lib";
import { useRouter } from "nextjs-toploader/app";
import { useUser } from "@/entities/user";
import { useEffect } from "react";
import CheckoutFormSkeleton from "./CheckoutFormSkeleton";
import OrderTypeSelect from "../OrderTypeSelect/OrderTypeSelect";
import { DELIVERY_INTERVALS, PICKUP_INTERVALS } from "./timeslots";

interface Props {
  checkoutFormID: string;
  paymentIsProccessing: boolean;
  setPaymentIsProccessing: (isProcessing: boolean) => void;
}

export default function CheckoutForm({
  checkoutFormID,
  paymentIsProccessing,
  setPaymentIsProccessing,
}: Props) {
  const user = useUser();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
    resetField,
  } = useFormContext<ICheckoutForm>();
  const createOrderMutation = useCreateOrder();
  const router = useRouter();

  const orderType = watch("orderType");

  const disabledDates =
    orderType === "delivery"
      ? [
          getDateInNY(2026, 1, 12),
          getDateInNY(2026, 1, 13),
          getDateInNY(2026, 1, 14),
        ]
      : [];

  useEffect(() => {
    if (!orderType) return;

    const [firstSlot] =
      orderType === "pickup" ? PICKUP_INTERVALS : DELIVERY_INTERVALS;

    setValue("deliveryTime", firstSlot.time ?? "09:00", {
      shouldValidate: true,
      shouldDirty: true,
    });

    resetField("deliveryDate");
  }, [orderType, setValue, resetField]);

  useEffect(() => {
    if (user.data) {
      reset({
        name: user.data.name,
        email: user.data.email,
        deliveryTime: "09:00",
        orderType: "delivery",
      });
    }
  }, [user.data, reset]);

  const deliveryErrors =
    orderType === "delivery" ? (errors as FieldErrors<DeliveryForm>) : null;

  const onSubmit = async ({
    deliveryDate,
    deliveryTime,
    ...values
  }: ICheckoutForm) => {
    setPaymentIsProccessing(true);

    try {
      const deliveryAt = combineDateTimeToUTC(deliveryDate, deliveryTime);

      const baseCheckoutData = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        delivery_at: deliveryAt,
        notes: values.notes,
        shipping_notes: values.shippingNotes,
      };

      const response = await createOrderMutation.mutateAsync(
        values.orderType === "delivery"
          ? {
              ...baseCheckoutData,
              delivery_type: "delivery",
              recipient_name: values.recipientName,
              recipient_phone: values.recipientPhone,
              address:
                values.shippingAddress.formatted_address ??
                "Address not selected",
            }
          : {
              ...baseCheckoutData,
              delivery_type: "pickup",
            },
      );

      return router.replace(ROUTES.PAY(response.data.orderUUID));
    } catch (e) {
      setPaymentIsProccessing(false);
      console.log("ERROR", e);
    }
  };

  if (user.isPending) {
    return <CheckoutFormSkeleton />;
  }

  return (
    <form id={checkoutFormID} onSubmit={handleSubmit(onSubmit)}>
      <h5 className="mb-32">Billing Details</h5>

      <div className="row">
        <div className="col-md-6">
          <Input
            placeholder="Your name"
            error={errors.name?.message}
            disabled={paymentIsProccessing}
            {...register("name")}
          />
        </div>
      </div>

      <div className="row mt-16 row-gap-3">
        <div className="col-md-6">
          <Input
            placeholder="Your Email"
            disabled={paymentIsProccessing}
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        <div className="col-md-6">
          <Input.Mask
            {...US_TELEPHONE_MASK}
            showMask
            disabled={paymentIsProccessing}
            error={errors.phone?.message}
            {...register("phone")}
          />
        </div>
      </div>

      <div className="row mt-16 mb-32">
        <div className="col-md-12">
          <Textarea
            rows={6}
            label="Order notes (optional)"
            disabled={paymentIsProccessing}
            error={errors.notes?.message}
            {...register("notes")}
          />
        </div>
      </div>

      <h5 className="mb-32">Shipping Details</h5>

      <div className="mb-32">
        <div className="row mb-4">
          <InputLabel>Shipping Method</InputLabel>
          <Controller
            control={control}
            name="orderType"
            render={({ field }) => (
              <OrderTypeSelect value={field.value} onChange={field.onChange} />
            )}
          />
        </div>

        <div className="row row-gap-3">
          {orderType === "delivery" ? (
            <>
              <div className="col-md-6">
                <Input
                  placeholder="Recipient Name"
                  disabled={paymentIsProccessing}
                  error={deliveryErrors?.recipientName?.message}
                  {...register("recipientName")}
                />
              </div>

              <div className="col-md-6">
                <Input.Mask
                  placeholder="Recipient Phone"
                  {...US_TELEPHONE_MASK}
                  disabled={paymentIsProccessing}
                  error={deliveryErrors?.recipientPhone?.message}
                  {...register("recipientPhone")}
                />
              </div>
            </>
          ) : null}

          <div className="col-md-6">
            <InputLabel>Shipping interval</InputLabel>
            <Controller
              control={control}
              disabled={paymentIsProccessing}
              name="deliveryDate"
              render={({ field }) => (
                <DayPicker
                  animate
                  inputDisabled={field.disabled}
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  placeholder="Select Shipping Date"
                  disabled={[
                    { before: getMinSelectableDateNY() },
                    { dayOfWeek: [0, 6] },
                    ...disabledDates,
                  ]}
                  error={errors.deliveryDate?.message}
                  timeZone="America/New_York"
                />
              )}
            />
          </div>

          <div className="col-md-12">
            <Controller
              control={control}
              name="deliveryTime"
              disabled={paymentIsProccessing}
              render={({ field }) => (
                <TimeSlots
                  timeSlots={
                    orderType === "delivery"
                      ? DELIVERY_INTERVALS
                      : PICKUP_INTERVALS
                  }
                  value={field.value}
                  onChange={(time) => field.onChange(time)}
                />
              )}
            />
          </div>

          {orderType === "delivery" ? (
            <div className="col-md-12">
              <InputLabel>Delivery address</InputLabel>

              <Controller
                control={control}
                name="shippingAddress"
                disabled={paymentIsProccessing}
                render={({ field }) => (
                  <GooglePlaces
                    onSelect={field.onChange}
                    error={deliveryErrors?.shippingAddress?.message}
                    disabled={field.disabled}
                  />
                )}
              />

              {deliveryErrors?.shippingAddress?.message ? (
                <Anchor
                  as="button"
                  className="mt-2 unstyled-btn"
                  style={{ fontSize: 14 }}
                  onClick={() => setValue("orderType", "pickup")}
                >
                  Switch to Store Pickup
                </Anchor>
              ) : null}
            </div>
          ) : null}

          <div className="col-md-12">
            <Textarea
              rows={6}
              label="Shipping notes (optional)"
              disabled={paymentIsProccessing}
              error={errors.shippingNotes?.message}
              {...register("shippingNotes")}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
