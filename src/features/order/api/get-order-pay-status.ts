import { OrderPay } from "@/entities/order";
import { ApiClient } from "@/shared/api";

type Response = OrderPay | { status: "paid" };

export function getOrderPayStatus(orderUUID: string) {
  return ApiClient.GET<Response>(`/orders/pay-status/${orderUUID}`);
}
