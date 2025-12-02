import { ApiClient } from "@/shared/api";
import { PostCategory } from "../model/types";

type Response = PostCategory[];

export function getAllPostCategories() {
  return ApiClient.GET<Response>("/blog/categories");
}
