import { ApiClient } from "@/shared/api";
import { PaginationResponse } from "@/shared/lib/utility-types";
import { PostCard } from "../model/types";

type Response = PaginationResponse<PostCard>;

export function getAllPosts(page: number = 1) {
  const queryParams = new URLSearchParams();

  queryParams.set("page", page.toString());

  return ApiClient.GET<Response>(`/blog/all-posts?${queryParams.toString()}`);
}
