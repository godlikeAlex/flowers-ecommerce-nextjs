import { Order } from "@/entities/order";
import { ApiClient } from "@/shared/api";

type Response = Order[];

export function getHistoryOrders() {
  return ApiClient.GET<Response>("/orders/history");
}
