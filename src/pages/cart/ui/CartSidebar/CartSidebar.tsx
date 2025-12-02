import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import { ShoppingCartSimpleIcon } from "@phosphor-icons/react/dist/ssr/ShoppingCartSimple";
import { Button } from "@/shared/ui";
import { DiscountInput, Sidebar } from "@/widgets/cart/ui";
import { useCart } from "@/entities/cart";
import { ROUTES } from "@/shared/config";

export default function CartSidebar() {
  const cart = useCart();

  if (cart.isPending || cart.isError) {
    return <Skeleton height={450} borderRadius={10} />;
  }

  return (
    <Sidebar heading="Cart Total" sticky>
      <Sidebar.PriceListItem title="Subtotal" price={cart.data.sub_total} />
      <Sidebar.PriceListItem title="Shipping" price={0} />
      {cart.data.discount_amount > 0 && (
        <Sidebar.PriceListItem
          title="Discount"
          price={cart.data.discount_amount}
        />
      )}

      <div className="mt-4">
        <Sidebar.Total price={cart.data.total} />
      </div>

      <div className="mt-4">
        <DiscountInput />
      </div>

      <Button
        as={Link}
        href={ROUTES.CHECKOUT}
        accessoryRight={<ShoppingCartSimpleIcon />}
        className="w-100 mt-4"
      >
        Proceed To Checkout
      </Button>
    </Sidebar>
  );
}
