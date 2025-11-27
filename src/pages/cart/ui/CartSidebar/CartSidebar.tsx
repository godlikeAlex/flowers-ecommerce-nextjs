import Link from "next/link";
import { ShoppingCartSimpleIcon } from "@phosphor-icons/react/dist/ssr/ShoppingCartSimple";
import { Button } from "@/shared/ui";
import { Sidebar } from "@/widgets/cart/ui";
import { useCart } from "@/entities/cart";
import Skeleton from "react-loading-skeleton";

export default function CartSidebar() {
  const cart = useCart();

  if (cart.isPending || cart.isError) {
    return <Skeleton height={450} borderRadius={10} />;
  }

  return (
    <Sidebar heading="Cart Total" sticky>
      <Sidebar.PriceListItem title="Subtotal" price={2500} />
      <Sidebar.PriceListItem title="Shipping" price={0} />

      <div className="mt-4">
        <Sidebar.Total price={cart.data.total} />
      </div>

      <Button
        as={Link}
        href="/cart/checkout"
        accessoryRight={<ShoppingCartSimpleIcon />}
        className="w-100 mt-4"
      >
        Proceed To Checkout
      </Button>
    </Sidebar>
  );
}
