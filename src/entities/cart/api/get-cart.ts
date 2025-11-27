import { ApiClient } from "@/shared/api";

import type { Cart } from "../model/types";

export async function getCart() {
  return ApiClient.GET<Cart>("/cart");
}
