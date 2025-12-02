import { QUERY_CART_KEY } from "@/entities/cart/model/useCart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelDiscount } from "../api/cancel-discount";

export function useCancelDiscount() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await cancelDiscount();

      return response.data;
    },
    onSuccess: (cart) => {
      queryClient.setQueryData([QUERY_CART_KEY], cart);
    },
  });
}
