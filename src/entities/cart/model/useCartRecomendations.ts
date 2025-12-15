import { useQuery } from "@tanstack/react-query";

import { getAddonsRecomendations } from "../api/get-addons-recomendations";

export const QUERY_CART_RECOMMENDATION_KEY = "recommendation";

export function useCartRecomendations() {
  return useQuery({
    refetchOnMount: true,
    queryKey: [QUERY_CART_RECOMMENDATION_KEY],
    queryFn: async () => {
      const { data } = await getAddonsRecomendations();

      return data;
    },
  });
}
