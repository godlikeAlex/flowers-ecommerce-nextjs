import { ApiClient } from "@/shared/api";
import { Review } from "../model/types";
import { PaginationResponse } from "@/shared/lib/utility-types";

interface GetReviewsDTO {
  productID: number;
  page: number;
}

type ReviewsResponse = PaginationResponse<Review>;

export function getReviews({ productID, page }: GetReviewsDTO) {
  const searchParams = new URLSearchParams();

  searchParams.set("page", page.toString());

  const queryString = searchParams.toString();

  return ApiClient.GET<ReviewsResponse>(`/reviews/${productID}?${queryString}`);
}
