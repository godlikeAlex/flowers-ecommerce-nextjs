export interface OrderPay {
  order_uuid: string;
  status: "pending";
  order_items: OrderItem[];
  total_amount: number;
  subtotal_amount: number;
  discount_amount: number;
  tax_amount: number;
  delivery_fee: number;
  email: string;
}

export interface OrderItem {
  id: number;
  product_name: string;
  product_option_name: string;
  quantity: string;
  price: number;
  total: number;
  cover: string;
}

export interface Order {
  id: string;
  uuid: string;
  status: string;
  timezone: string;
  delivery_at: string;
  address: string;
  total_amount: number;
  receipt_url?: string;
  order_items: OrderItem[];
  tax_amount: number;
  delivery_fee: number;
}

export type TimeSlot = {
  label: string;
  time: string;
};

type WeeklyDaySlots = {
  day: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  slots: TimeSlot[];
};

export type FulfillmentChannelSchedule = {
  min_order_days: number;
  weekly_slots: WeeklyDaySlots[];
  weekly_disabled_days: number[];
  specific_date_slots: Record<string, TimeSlot[]>;
  specific_disabled_dates: string[];
};

export interface FulfillmentSchedule {
  pickup: FulfillmentChannelSchedule;
  delivery: FulfillmentChannelSchedule;
}
