import { Cart } from "@/entities/cart";
import { ApiClient } from "@/shared/api";

export interface AddAddonToCart {
  option_id: number;
  addon_id: number;
}

export async function addAddonToCart(data: AddAddonToCart) {
  return ApiClient.POST<Cart>("/cart/add-addon", data);
}
