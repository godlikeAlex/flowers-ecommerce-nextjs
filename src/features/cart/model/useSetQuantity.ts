"use client";

import { QUERY_CART_KEY } from "@/entities/cart/model/useCart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setQuantity, SetQuantityDTO } from "../api/set-quantity";

export function useSetQuantity() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: SetQuantityDTO) => {
      const response = await setQuantity(data);

      return response.data;
    },
    onSuccess: (cart) => {
      queryClient.setQueryData([QUERY_CART_KEY], cart);
    },
  });
}
