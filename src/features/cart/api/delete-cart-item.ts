import { Cart } from "@/entities/cart";
import { ApiClient } from "@/shared/api";

export function deleteCartItem(cartItemID: number) {
  return ApiClient.POST<Cart>(`/cart/remove/${cartItemID}`);
}
