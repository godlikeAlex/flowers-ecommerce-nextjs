import { Controller, useFormContext } from "react-hook-form";
import { DayPicker, GooglePlaces, Input, Textarea } from "@/shared/ui";
import TimeField from "react-simple-timefield";

import type { CheckoutForm as ICheckoutForm } from "../../model/checkout-schema";
import { US_TELEPHONE_MASK } from "@/shared/config";

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

  const onSubmit = (values: ICheckoutForm) => {
    // We click to hidden pay button square to process payment.
    // Process payment logic in SquarePaymentCard component
    setPaymentIsProccessing(true);
    // handleSquareClickPay();
  };

  return (
    <form id={checkoutFormID} onSubmit={handleSubmit(onSubmit)}>
      <h5 className="mb-32">Billing Details</h5>

      <div className="row">
        <div className="col-md-6">
          <Input
            placeholder="Your name"
            error={errors.name?.message}
            {...register("name")}
          />
        </div>
      </div>

      <div className="row mt-16 row-gap-3">
        <div className="col-md-6">
          <Input
            placeholder="Your Email"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        <div className="col-md-6">
          <Input.Mask
            {...US_TELEPHONE_MASK}
            showMask
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
              name="deliveryDate"
              render={({ field }) => (
                <DayPicker
                  animate
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  placeholder="Select Shipping Date"
                  error={errors.deliveryDate?.message}
                />
              )}
            />
          </div>

          <div className="col-md-6">
            <Controller
              control={control}
              name="deliveryTime"
              render={({ field }) => (
                <TimeField
                  value={field.value}
                  onChange={(event, value) => field.onChange(value)}
                  input={<Input error={errors.deliveryTime?.message} />}
                  colon=":"
                />
              )}
            />
          </div>

          <div className="col-md-12">
            <Controller
              control={control}
              name="shippingAddress"
              render={({ field }) => (
                <GooglePlaces
                  onSelect={field.onChange}
                  error={errors.shippingAddress?.message}
                />
              )}
            />
          </div>
          <div className="col-md-12">
            <Textarea
              rows={6}
              label="Shipping notes (optional)"
              error={errors.shippingNotes?.message}
              {...register("shippingNotes")}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
