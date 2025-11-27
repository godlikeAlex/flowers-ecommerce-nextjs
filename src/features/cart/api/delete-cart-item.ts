import { Cart } from "@/entities/cart";
import { ApiClient } from "@/shared/api";

export function deleteCartItem(productOption: number) {
  return ApiClient.POST<Cart>("/cart/remove", { option_id: productOption });
}
