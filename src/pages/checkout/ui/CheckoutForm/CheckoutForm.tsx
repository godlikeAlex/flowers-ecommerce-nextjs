import { Controller, useFormContext } from "react-hook-form";
import {
  Checkbox,
  DayPicker,
  GooglePlaces,
  Input,
  Textarea,
} from "@/shared/ui";
import TimeField from "react-simple-timefield";

import type { CheckoutForm as ICheckoutForm } from "../../model/checkout-schema";
import { ROUTES, US_TELEPHONE_MASK } from "@/shared/config";
import { useCreateOrder } from "@/features/order";
import { getNowInNY, combineDateTimeToUTC } from "@/shared/lib";
import { useRouter } from "nextjs-toploader/app";
import { useUser } from "@/entities/user";
import { useEffect } from "react";
import CheckoutFormSkeleton from "./CheckoutFormSkeleton";
import { set } from "date-fns";

interface Props {
  checkoutFormID: string;
  paymentIsProccessing: boolean;
  setPaymentIsProccessing: (isProcessing: boolean) => void;
}

const INTERVALS = [
  {
    label: "9:00 AM – 1:00 PM",
    time: "09:00",
  },
  {
    label: "1:00 PM – 4:00 PM",
    time: "13:00",
  },
];

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
  } = useFormContext<ICheckoutForm>();
  const createOrderMutation = useCreateOrder();
  const router = useRouter();

  const orderType = watch("orderType");

  useEffect(() => {
    if (user.data) {
      reset({
        name: user.data.name,
        email: user.data.email,
        deliveryTime: "09:00",
      });
    }
  }, [user.data, reset]);

  const onSubmit = async ({
    shippingAddress,
    shippingNotes,
    notes,
    deliveryDate,
    deliveryTime,
    ...values
  }: ICheckoutForm) => {
    setPaymentIsProccessing(true);

    try {
      const deliveryAt = combineDateTimeToUTC(deliveryDate, deliveryTime);

      const response = await createOrderMutation.mutateAsync({
        ...values,
        address: shippingAddress.formatted_address ?? "Address not selected",
        shipping_notes: shippingNotes,
        notes: notes,
        delivery_at: deliveryAt,
      });

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
        <div className="row mb-2 row-gap-2">
          <Controller
            control={control}
            name="orderType"
            render={({ field }) => (
              <>
                <div className="col-md-12">
                  <Checkbox
                    label="Pickup"
                    checked={field.value === "pickup"}
                    onChange={() => field.onChange("pickup")}
                  />
                </div>

                <div className="col-md-12">
                  <Checkbox
                    label="Delivery + 20$"
                    checked={field.value === "delivery"}
                    onChange={() => field.onChange("delivery")}
                  />
                </div>
              </>
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
                  error={errors.recipientName?.message}
                  {...register("recipientName")}
                />
              </div>

              <div className="col-md-6">
                <Input.Mask
                  placeholder="Recipient Phone"
                  {...US_TELEPHONE_MASK}
                  disabled={paymentIsProccessing}
                  error={errors.recipientPhone?.message}
                  {...register("recipientPhone")}
                />
              </div>
            </>
          ) : null}

          <div className="col-md-6">
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
                  disabled={{ before: getNowInNY() }}
                  error={errors.deliveryDate?.message}
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
                <>
                  <div className="d-flex gap-2">
                    {INTERVALS.map((interval) => (
                      <div
                        key={interval.label}
                        style={{
                          cursor: "pointer",
                          background:
                            interval.time === field.value
                              ? "var(--primary-color)"
                              : "var(--primary-light-blue)",
                          borderRadius: 5,
                          padding: 5,
                          color:
                            interval.time === field.value
                              ? "white"
                              : "var(--heading-color)",
                        }}
                        aria-hidden="true"
                        onClick={() => field.onChange(interval.time)}
                      >
                        {interval.label}
                      </div>
                    ))}
                  </div>
                </>
              )}
            />
          </div>

          <div className="col-md-12">
            <Controller
              control={control}
              name="shippingAddress"
              disabled={paymentIsProccessing}
              render={({ field }) => (
                <GooglePlaces
                  onSelect={field.onChange}
                  error={errors.shippingAddress?.message}
                  disabled={field.disabled}
                />
              )}
            />
          </div>
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
