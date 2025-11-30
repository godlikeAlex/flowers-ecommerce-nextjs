export interface OrderPay {
  order_uuid: string;
  status: "pending";
  order_items: OrderItem[];
  total_amount: number;
}

export interface OrderItem {
  id: number;
  product_name: string;
  product_option_name: string;
  quantity: string;
  price: number;
  cover: string;
}
