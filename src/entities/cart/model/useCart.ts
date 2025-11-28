import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/get-cart";

export const QUERY_CART_KEY = "cart";

export function useCart() {
  return useQuery({
    queryKey: [QUERY_CART_KEY],
    queryFn: async () => {
      const { data } = await getCart();

      return data;
    },
  });
}
