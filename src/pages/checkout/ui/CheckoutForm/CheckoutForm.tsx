import { Controller, useFormContext } from "react-hook-form";
import { DayPicker, GooglePlaces, Input, Textarea } from "@/shared/ui";
import TimeField from "react-simple-timefield";

import type { CheckoutForm as ICheckoutForm } from "../../model/checkout-schema";
import { ROUTES, US_TELEPHONE_MASK } from "@/shared/config";
import { useCreateOrder } from "@/features/order";
import { toUTCDatetime } from "@/shared/lib";
import { useRouter } from "nextjs-toploader/app";

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
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext<ICheckoutForm>();
  const createOrderMutation = useCreateOrder();
  const router = useRouter();

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
      const response = await createOrderMutation.mutateAsync({
        ...values,
        address: shippingAddress.formatted_address ?? "Address not selected",
        shipping_notes: shippingNotes,
        notes: notes,
        delivery_at: toUTCDatetime(deliveryDate, deliveryTime),
      });

      return router.replace(ROUTES.PAY(response.data.orderUUID));
    } catch (e) {
      setPaymentIsProccessing(false);
      console.log("ERROR", e);
    }
  };

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
        <div className="row row-gap-3">
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
                  disabled={{ before: new Date() }}
                  error={errors.deliveryDate?.message}
                />
              )}
            />
          </div>

          <div className="col-md-6">
            <Controller
              control={control}
              name="deliveryTime"
              disabled={paymentIsProccessing}
              render={({ field }) => (
                <TimeField
                  value={field.value}
                  onChange={(event, value) => field.onChange(value)}
                  input={
                    <Input
                      error={errors.deliveryTime?.message}
                      disabled={field.disabled}
                    />
                  }
                  colon=":"
                />
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
