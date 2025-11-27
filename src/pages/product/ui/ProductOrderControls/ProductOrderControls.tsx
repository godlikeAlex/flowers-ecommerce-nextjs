"use client";

import { formatPrice } from "@/shared/lib";
import { Button, QuantityControl } from "@/shared/ui";
import { ProductAddon, ProductOption } from "@/entities/product";
import { ShoppingCartSimpleIcon } from "@phosphor-icons/react/dist/ssr/ShoppingCartSimple";

import { ProductAddons } from "../ProductAddons";
import { ProductOptionsList } from "../ProductOptionsList";
import Link from "next/link";

import styles from "./ProductOrderControls.module.css";
import clsx from "clsx";
import { useProductCart } from "@/widgets/product";
import { TrashSimpleIcon } from "@phosphor-icons/react/dist/ssr/TrashSimple";

interface Props {
  productOptions: ProductOption[];
  productAddons: ProductAddon[];
}

export default function ProductOrderControls({
  productOptions,
  productAddons,
}: Props) {
  const {
    productState: { selectedOption, selectedAddons, quantity, productStatus },
    setQuantity,
    setLocalQuantity,
    setServerQuantity,
    addToCart,
    deleteCartItem,
    quantityIsDisabled,
  } = useProductCart();

  const basicPrice = formatPrice(selectedOption?.price ?? 0);

  const totalPrice = (() => {
    const basicPrice = selectedOption?.price ?? 0;

    const addonsPrices = selectedAddons.reduce((acc, addon) => {
      const targetOption = addon.options.at(0);

      if (targetOption) {
        acc += targetOption.price;
      }

      return acc;
    }, 0);

    const total = basicPrice * quantity + addonsPrices;

    return formatPrice(total);
  })();

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
        setServerQuantity(() => targetQty);
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

  return (
    <>
      <div className="price mb-16">
        {productOptions.length > 1 ? (
          <ProductOptionsList options={productOptions} />
        ) : (
          <h3>{basicPrice}</h3>
        )}
      </div>

      {productAddons.length > 0 && (
        <div>
          <ProductAddons addons={productAddons} />

          <hr className="dash-line mb-16" />
        </div>
      )}

      <h3 className="accent-dark d-block d-md-none mb-16 text-center primary-color">
        <span className="bold-text">{totalPrice}</span>
      </h3>

      <div className="d-flex justify-content-between align-items-stretch gap-3 mb-16">
        <QuantityControl
          classNames={{
            increment: styles.quantityButton,
            decrement: styles.quantityButton,
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

        {productStatus === "ADD" ? (
          <Button
            accessoryRight={<ShoppingCartSimpleIcon width={20} height={20} />}
            className={clsx("w-100", styles["button-add-to-cart"])}
            style={{ flexShrink: 1 }}
            variant="primary"
            loading={quantityIsDisabled}
            onClick={handleAddToCart}
          >
            Add To Cart
            <div className="bold-text d-none d-md-block"> = {totalPrice}</div>
          </Button>
        ) : (
          <Button
            as={Link}
            href="/cart"
            accessoryRight={<ShoppingCartSimpleIcon width={20} height={20} />}
            className={clsx("w-100", styles["button-add-to-cart"])}
            style={{ flexShrink: 1 }}
            status="success"
            variant="primary"
            loading={quantityIsDisabled}
          >
            Go to cart
          </Button>
        )}
      </div>
    </>
  );
}
