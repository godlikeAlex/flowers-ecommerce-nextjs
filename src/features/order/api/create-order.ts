import { ApiClient } from "@/shared/api";

interface BaseOrder {
  name: string;
  email: string;
  phone: string;
  notes?: string;
  shipping_notes?: string;
  delivery_at: string;
}

interface DeliveryOrder extends BaseOrder {
  address: string;
  delivery_type: "delivery";
  recipient_name: string;
  recipient_phone: string;
}

interface PickupOrder extends BaseOrder {
  delivery_type: "pickup";
}

export type CreateOrderDTO = DeliveryOrder | PickupOrder;

interface Response {
  orderUUID: string;
}

export function createOrder(data: CreateOrderDTO) {
  return ApiClient.POST<Response>("/orders/create", data);
}
