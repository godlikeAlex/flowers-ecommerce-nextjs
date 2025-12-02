import { ApiClient } from "@/shared/api";

export function applyVoucher(code: string) {
  return ApiClient.POST("/cart/apply-discount", { code });
}
