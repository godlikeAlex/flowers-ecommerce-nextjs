"use client";

import { QUERY_CART_KEY } from "@/entities/cart/model/useCart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAddonToCart, AddAddonToCart } from "../api/add-addon-to-cart";
import { QUERY_CART_RECOMMENDATION_KEY } from "@/entities/cart/model/useCartRecomendations";

export function useAddCartItemAddon() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: AddAddonToCart) => {
      const response = await addAddonToCart(data);

      return response.data;
    },
    onSuccess: (cart) => {
      queryClient.setQueryData([QUERY_CART_KEY], cart);
      queryClient.invalidateQueries({
        queryKey: [QUERY_CART_RECOMMENDATION_KEY],
      });
    },
  });
}
