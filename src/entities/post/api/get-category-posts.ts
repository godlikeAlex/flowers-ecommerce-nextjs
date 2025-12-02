import { ApiClient } from "@/shared/api";
import { PaginationResponse } from "@/shared/lib/utility-types";
import { PostCard, PostCategory } from "../model/types";

interface GetCategoryPostsDTO {
  categorySlug: string;
  page: number;
}

interface Response {
  category: PostCategory;
  posts: PaginationResponse<PostCard>;
}

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
