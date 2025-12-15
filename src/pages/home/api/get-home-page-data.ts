import { FeaturedSection } from "@/entities/featured-section";
import { PostCard } from "@/entities/post";
import { ApiClient } from "@/shared/api";

interface Response {
  latest_posts: PostCard[];
  featured_section: FeaturedSection[];
}

export function getHomePageData() {
  return ApiClient.GET<Response>("/homepage");
}
