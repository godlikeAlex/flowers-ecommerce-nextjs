import { Cart } from "@/entities/cart";
import { ApiClient } from "@/shared/api";

export interface SetQuantityDTO {
  option_id: number;
  quantity: number;
}

export function setQuantity(data: SetQuantityDTO) {
  return ApiClient.POST<Cart>("/cart/set-quantity", data);
}
