import { CartItem } from "@/entities/cart";

interface Contexts<T = void> {
  EDIT: (cartItem: CartItem) => T;
  ADD: () => T;
}

export function executeByProductContext<T>(
  cartItem: CartItem | undefined,
  { EDIT, ADD }: Contexts<T>,
): T {
  if (cartItem) {
    return EDIT(cartItem);
  } else {
    return ADD();
  }
}
