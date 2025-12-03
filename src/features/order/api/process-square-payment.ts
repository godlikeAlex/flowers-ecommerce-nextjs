import { ApiClient } from "@/shared/api";

interface ProcessPaymentDTO {
  orderUUID: string;
  source_id: string;
  verification_token?: string;
}

export function processSquarePayment({
  source_id,
  orderUUID,
  verification_token,
}: ProcessPaymentDTO) {
  return ApiClient.POST(`/orders/process-payment/${orderUUID}`, {
    source_id,
    verification_token,
  });
}
