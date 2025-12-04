import { ProductAddon } from "@/entities/product";
import { ProductOption } from "@/entities/product/@x/cart";

export interface Cart {
  cart_token: string;
  items: CartItem[];
  total: number;
  discount_code: number;
  sub_total: number;
  discount_amount: number;
}

export interface CartItem {
  id: number;
  product: {
    id: number;
    name: string;
    image?: string;
  };
  quantity: number;
  price: number;
  total: number;
  product_option: ProductOption;
  addons: ProductAddon[];
}
