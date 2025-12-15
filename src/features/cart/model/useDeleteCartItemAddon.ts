"use client";

import { QUERY_CART_KEY } from "@/entities/cart/model/useCart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteCartItemAddon,
  DeleteCartItemAddonDTO,
} from "../api/delete-cart-item-addon";
import { QUERY_CART_RECOMMENDATION_KEY } from "@/entities/cart/model/useCartRecomendations";

export function useDeleteCartItemAddon() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: DeleteCartItemAddonDTO) => {
      const response = await deleteCartItemAddon(data);

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
