"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCart } from "../api/get-cart";
import { useEffect } from "react";
import { QUERY_CART_RECOMMENDATION_KEY } from "./useCartRecomendations";

export const QUERY_CART_KEY = "cart";

export function useCart() {
  const queryClient = useQueryClient();
  const query = useQuery({
    refetchOnMount: true,
    queryKey: [QUERY_CART_KEY],
    queryFn: async () => {
      const { data } = await getCart();

      return data;
    },
  });

  return query;
}
