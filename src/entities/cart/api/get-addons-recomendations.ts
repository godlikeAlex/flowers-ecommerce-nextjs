import { ApiClient } from "@/shared/api";
import { CartAddonRecomendation } from "../model/types";

export function getAddonsRecomendations() {
  return ApiClient.GET<CartAddonRecomendation[]>("/cart/recommendations");
}
