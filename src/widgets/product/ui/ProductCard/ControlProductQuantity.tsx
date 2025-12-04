import { Button, IconButton, QuantityControl } from "@/shared/ui";
import { ShoppingCartSimpleIcon } from "@phosphor-icons/react/dist/ssr/ShoppingCartSimple";
import { useProductCart } from "../../model/use-product-сart";
import { TrashSimpleIcon } from "@phosphor-icons/react/dist/ssr/TrashSimple";
import Link from "next/link";
import { ROUTES } from "@/shared/config";
import { useCart } from "@/entities/cart";
import Skeleton from "react-loading-skeleton";
import { ThreeDots } from "react-loader-spinner";

import styles from "./ProductCard.module.css";

export default function ControlProductQuantity() {
  const cart = useCart();

  const {
    productState: { quantity, productStatus },
    setQuantity,
    setLocalQuantity,
    addToCart,
    deleteCartItem,
    quantityIsDisabled,
  } = useProductCart();

  const onIncrement = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const onDecrement = () => {
    if (productStatus === "ADD") {
      setLocalQuantity((quantity) => Math.max(quantity - 1, 1));
    }

    if (productStatus === "EDIT") {
      const targetQty = quantity - 1;

      if (targetQty >= 1) {
        setQuantity(targetQty);
      } else {
        deleteCartItem();
      }
    }
  };

  const onChangeQuantity = (newQuantity: number) => {
    setLocalQuantity(newQuantity);
  };

  const onBlurQuantity = () => {
    if (quantity < 1 || !quantity) {
      setLocalQuantity(1);
    }
  };

  const handleAddToCart = async () => {
    await addToCart();
  };

  if (cart.isPending) {
    return (
      <div className="text-center relative">
        <ThreeDots visible={true} radius="9" wrapperClass={styles.loader} />
      </div>
    );
  }

  return (
    <>
      <QuantityControl
        value={quantity}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onChange={onChangeQuantity}
        onBlur={onBlurQuantity}
        disabled={quantityIsDisabled}
        iconDecrement={
          productStatus === "EDIT" && quantity === 1 ? (
            <TrashSimpleIcon fill="#FA5252" />
          ) : undefined
        }
      />

      {productStatus === "EDIT" ? (
        <Button
          variant="primary"
          status="success"
          className="w-100"
          as={Link}
          href={ROUTES.CART}
          accessoryRight={<ShoppingCartSimpleIcon />}
        >
          Go To Cart
        </Button>
      ) : (
        <IconButton onClick={addToCart} icon={<ShoppingCartSimpleIcon />} />
      )}
    </>
  );
}
