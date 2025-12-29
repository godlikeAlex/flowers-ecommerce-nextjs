import { ApiClient } from "@/shared/api";
import {
  PaginationResponse,
  WithSeoResponse,
} from "@/shared/lib/utility-types";
import { PostCard, PostCategory } from "../model/types";

interface GetCategoryPostsDTO {
  categorySlug: string;
  page: number;
}

type Response = {
  posts: PaginationResponse<PostCard>;
} & WithSeoResponse<"category", PostCategory>;

export function getCategoryPosts({
  page = 1,
  categorySlug,
}: GetCategoryPostsDTO) {
  const queryParams = new URLSearchParams();

  queryParams.set("page", page.toString());

  return ApiClient.GET<Response>(
    `/blog/categories/${categorySlug}?${queryParams.toString()}`,
  );
}
