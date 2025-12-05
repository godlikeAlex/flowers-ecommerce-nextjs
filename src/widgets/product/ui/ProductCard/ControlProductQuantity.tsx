import { Button, IconButton, QuantityControl } from "@/shared/ui";
import { ShoppingCartSimpleIcon } from "@phosphor-icons/react/dist/ssr/ShoppingCartSimple";
import { useProductCart } from "../../model/use-product-сart";
import { TrashSimpleIcon } from "@phosphor-icons/react/dist/ssr/TrashSimple";
import Link from "next/link";
import { ROUTES } from "@/shared/config";
import { useCart } from "@/entities/cart";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "sonner";

import styles from "./ProductCard.module.css";
import { PlusCircleIcon } from "@phosphor-icons/react/dist/ssr/PlusCircle";

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
    try {
      await addToCart();

      toast.success("Product added to cart", { position: "bottom-center" });
    } catch (e) {
      console.log("Error while adding to cart: ", e);

      toast.error("Cant add product to cart", { position: "bottom-center" });
    }
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
        classNames={{
          decrement: styles.buttonAction,
          increment: styles.buttonAction,
        }}
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
        <IconButton
          className={styles.buttonAction}
          as={Link}
          href={ROUTES.CART}
          variant="ghost"
          icon={<ShoppingCartSimpleIcon />}
        />
      ) : (
        <IconButton
          className={styles.buttonAction}
          onClick={handleAddToCart}
          icon={<IconAdd />}
        />
      )}
    </>
  );
}

const IconAdd = () => (
  <div className="position-relative d-flex justify-center align-items-center">
    <ShoppingCartSimpleIcon />
    <PlusCircleIcon
      style={{ position: "absolute", right: -5, top: -3, fontSize: 13 }}
      weight="fill"
    />
  </div>
);
