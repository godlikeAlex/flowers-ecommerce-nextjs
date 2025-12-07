import { useInfiniteQuery } from "@tanstack/react-query";
import { getReviews } from "../api/get-reviews";

interface Params {
  productID: number;
}

export function useReviews({ productID }: Params) {
  return useInfiniteQuery({
    queryKey: ["reviews", productID],
    queryFn: ({ pageParam }) => {
      return getReviews({ page: pageParam, productID });
    },
    initialPageParam: 1,
    getNextPageParam: (result) => {
      const { meta } = result.data;

      if (meta.current_page === meta.last_page) return null;

      return meta.current_page + 1;
    },
    select: (result) => result.pages.flatMap((page) => page.data.data),
  });
}
