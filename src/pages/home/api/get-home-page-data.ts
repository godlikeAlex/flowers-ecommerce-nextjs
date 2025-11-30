import { PostCard } from "@/entities/post";
import { ApiClient } from "@/shared/api";

interface Response {
  latest_posts: PostCard[];
}

export function getHomePageData() {
  return ApiClient.GET<Response>("/homepage");
}
