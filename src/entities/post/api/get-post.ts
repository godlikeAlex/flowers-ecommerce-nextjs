import { ApiClient } from "@/shared/api";
import { Post } from "../model/types";

export function getPost(slug: string) {
  return ApiClient.GET<Post>(`/blog/post/${slug}`);
}
