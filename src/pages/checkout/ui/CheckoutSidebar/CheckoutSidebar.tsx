import { useCart } from "@/entities/cart";
import { Button, Checkbox, InputErrorMessage } from "@/shared/ui";
import { Sidebar } from "@/widgets/cart/ui";
import { HandPointingIcon } from "@phosphor-icons/react/dist/ssr/HandPointing";
import { Controller, useFormContext } from "react-hook-form";
import Skeleton from "react-loading-skeleton";
import { CheckoutForm } from "../../model/checkout-schema";

interface Props {
  checkoutFormID: string;
  paymentIsProccessing: boolean;
  setPaymentIsProccessing: (isProcessing: boolean) => void;
}

export default function CheckoutSidebar({
  checkoutFormID,
  paymentIsProccessing,
}: Props) {
  const cart = useCart();
  const {
    control,
    formState: { errors },
  } = useFormContext<CheckoutForm>();

  if (cart.isPending || cart.isError) {
    return <Skeleton height={450} borderRadius={10} />;
  }

  return (
    <Sidebar heading="Checkout" sticky>
      <Sidebar.PriceListItem title="Subtotal" price={cart.data?.total} />
      <Sidebar.PriceListItem title="Shipping" price={0} />

      <div className="mt-4">
        <Sidebar.Total price={cart.data?.total} />
      </div>

      <p className="mt-4">
        Your personal data will be used to process your order.
      </p>

      <div className="mt-4">
        <Controller
          control={control}
          name="termsAccepted"
          render={({ field }) => (
            <>
              <Checkbox
                checked={field.value}
                onChange={field.onChange}
                label="I Agree To The BLUEMELLE Terms"
              />

              {errors.termsAccepted && (
                <InputErrorMessage style={{ marginTop: 8 }}>
                  {errors.termsAccepted?.message}
                </InputErrorMessage>
              )}
            </>
          )}
        />
      </div>

      <Button
        className="w-100 mt-4"
        accessoryRight={<HandPointingIcon />}
        type="submit"
        form={checkoutFormID}
        loading={paymentIsProccessing}
      >
        Place Order
      </Button>
    </Sidebar>
  );
}
