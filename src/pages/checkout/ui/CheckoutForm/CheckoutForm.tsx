import { Controller, useFormContext } from "react-hook-form";
import type { CheckoutForm as ICheckoutForm } from "../../model/checkout-schema";
import { GooglePlaces, Input, Textarea } from "@/shared/ui";
import { SquarePaymentCard } from "../SquarePaymentCard";
import { handleSquareClickPay } from "../SquarePaymentCard/handle-square-pay";

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
    handleSquareClickPay();
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
          <Input
            placeholder="+1"
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
