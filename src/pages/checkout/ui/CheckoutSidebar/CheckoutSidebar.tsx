import { useCart } from "@/entities/cart";
import { Button, Checkbox, InputErrorMessage } from "@/shared/ui";
import { DiscountInput, Sidebar } from "@/widgets/cart/ui";
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
    watch,
  } = useFormContext<CheckoutForm>();

  const orderType = watch("orderType");

  const checkoutPrices = cart.data
    ? cart.data[orderType === "pickup" ? "pickup" : "delivery"]
    : undefined;

  if (cart.isPending || cart.isError) {
    return <Skeleton height={450} borderRadius={10} />;
  }

  return (
    <Sidebar heading="Checkout" sticky>
      <Sidebar.PriceListItem title="Subtotal" price={cart.data.sub_total} />

      {cart.data.discount_amount > 0 && (
        <Sidebar.PriceListItem
          title="Discount"
          price={cart.data.discount_amount}
        />
      )}

      <Sidebar.PriceListItem
        title="Tax (6.625%)"
        price={cart.data.tax_amount}
      />

      {checkoutPrices?.delivery_fee && checkoutPrices?.delivery_fee > 0 ? (
        <Sidebar.PriceListItem
          title="Shipping"
          price={checkoutPrices.delivery_fee}
        />
      ) : null}

      <div className="mt-4">
        <Sidebar.Total price={checkoutPrices?.total ?? 0} />
      </div>

      <div className="mt-4">
        <DiscountInput />
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
                disabled={paymentIsProccessing}
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
