import { Cart } from "@/entities/cart";
import { ApiClient } from "@/shared/api";

export interface SetQuantityDTO {
  cart_item_id: number;
  quantity: number;
}

export function setQuantity(data: SetQuantityDTO) {
  return ApiClient.POST<Cart>("/cart/set-quantity", data);
}
