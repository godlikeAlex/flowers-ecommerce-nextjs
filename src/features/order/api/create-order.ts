import { ApiClient } from "@/shared/api";

export interface CreateOrderDTO {
  name: string;
  email: string;
  phone: string;
  address: string;
  notes?: string;
  shipping_notes?: string;
  delivery_date_time: string;
}

interface Response {
  orderUUID: string;
}

export function createOrder(data: CreateOrderDTO) {
  return ApiClient.POST<Response>("/orders/create", data);
}
