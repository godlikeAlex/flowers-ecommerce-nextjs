import { Cart } from "@/entities/cart";
import { ApiClient } from "@/shared/api";

export interface DeleteCartItemAddonDTO {
  option_id: number;
  addon_id: number;
}

export function deleteCartItemAddon(data: DeleteCartItemAddonDTO) {
  return ApiClient.POST<Cart>("/cart/remove-addon", data);
}
