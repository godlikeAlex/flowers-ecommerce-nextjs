"use client";

import { QUERY_CART_KEY } from "@/entities/cart/model/useCart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartItem } from "../api/delete-cart-item";

export function useDeleteCartItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productOptionID: number) => {
      const response = await deleteCartItem(productOptionID);

      return response.data;
    },
    onSuccess: (cart) => {
      queryClient.setQueryData([QUERY_CART_KEY], cart);
    },
  });
}
