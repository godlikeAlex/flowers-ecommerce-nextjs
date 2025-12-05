import { useMutation } from "@tanstack/react-query";
import { publishReview } from "../api/publish-review";

export function usePublishReview() {
  return useMutation({
    mutationFn: publishReview,
  });
}
