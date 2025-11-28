"use client";

import { CartItem, useCart } from "@/entities/cart";

interface Params {
  productOptionID: number;
}

type ProductStatus =
  | {
      status: "PENDING" | "ERROR";
      cartItem: undefined;
    }
  | {
      status: "IDLE";
      cartItem?: CartItem;
    };

export function useProductInCart({ productOptionID }: Params): ProductStatus {
  const cart = useCart();

  if (cart.isPending || cart.error) {
    return {
      status: cart.isPending ? "PENDING" : "ERROR",
      cartItem: undefined,
    };
  }

  const targetProductOptionInCart = cart.data.items.find(
    (cartItem) => cartItem.product_option.id === productOptionID,
  );

  return {
    status: "IDLE",
    cartItem: targetProductOptionInCart,
  };
}
