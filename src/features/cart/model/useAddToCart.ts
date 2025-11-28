import { useMutation, useQueryClient } from "@tanstack/react-query";

import { type AddToCartDTO, addToCart } from "../api/add-to-cart";
import { QUERY_CART_KEY } from "@/entities/cart/model/useCart";

export function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: AddToCartDTO) => {
      const response = await addToCart(data);

      return response.data;
    },
    onSuccess: (cart) => {
      queryClient.setQueryData([QUERY_CART_KEY], cart);
    },
  });
}
