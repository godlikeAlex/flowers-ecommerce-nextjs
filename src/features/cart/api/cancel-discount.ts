import { ApiClient } from "@/shared/api";

export function cancelDiscount() {
  return ApiClient.POST("/cart/cancel-discount");
}
