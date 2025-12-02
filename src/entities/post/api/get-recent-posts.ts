import { ApiClient } from "@/shared/api";
import { PostCard } from "../model/types";

type Response = PostCard[];

export function getRecentPosts() {
  return ApiClient.GET<Response>("/blog/recent");
}
