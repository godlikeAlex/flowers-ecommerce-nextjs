"use client";

import { useState } from "react";

import { formatPrice } from "@/shared/lib";
import { Button, QuantityControl } from "@/shared/ui";
import { ProductAddon, ProductOption } from "@/entities/product";
import { ShoppingCartSimpleIcon } from "@phosphor-icons/react/dist/ssr/ShoppingCartSimple";

import { ProductAddons } from "../ProductAddons";
import { useProductSelection } from "../../model/product-selection-context";

interface Props {
  productOptions: ProductOption[];
  productAddons: ProductAddon[];
}

export default function ProductOrderControls({
  productOptions,
  productAddons,
}: Props) {
  const { selectedOption, selectedAddons } = useProductSelection();
  const [quantity, setQuantity] = useState(1);

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

  const onIncrement = () => setQuantity((quantity) => Math.max(quantity + 1));

  const onDecrement = () => {
    setQuantity((quantity) => Math.max(quantity - 1, 1));
  };

  const onChangeQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const onBlurQuantity = () => {
    if (quantity < 1 || !quantity) {
      setQuantity(1);
    }
  };

  return (
    <>
      <div className="price mb-16">
        <h3>{basicPrice}</h3>
      </div>

      {/* OPTIONS IF HAS */}

      {productAddons.length > 0 && (
        <div>
          <ProductAddons addons={productAddons} />

          <hr className="dash-line mb-16" />
        </div>
      )}

      <h3 className="accent-dark d-block d-md-none mb-16 text-center primary-color">
        <span className="bold-text">{totalPrice}</span>
      </h3>

      <div className="d-flex justify-content-between align-items-center gap-2 gap-md-5 mb-16">
        <QuantityControl
          value={quantity}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onChange={onChangeQuantity}
          onBlur={onBlurQuantity}
        />

        <Button
          accessoryRight={<ShoppingCartSimpleIcon width={20} height={20} />}
          className="w-100"
          style={{ flexShrink: 1 }}
          variant="primary"
        >
          Add To Cart{" "}
          <div className="bold-text d-none d-md-block"> = {totalPrice}</div>
        </Button>
      </div>
    </>
  );
}
