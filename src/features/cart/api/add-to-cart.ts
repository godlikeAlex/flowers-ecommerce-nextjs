import { Cart } from "@/entities/cart";
import { ApiClient } from "@/shared/api";

export interface AddToCartDTO {
  option_id: number;
  quantity: number;
  addons: number[];
}

export async function addToCart(data: AddToCartDTO) {
  return ApiClient.POST<Cart>("/cart/add", data);
}
