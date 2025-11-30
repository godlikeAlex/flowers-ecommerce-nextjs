import { PostCard } from "@/entities/post";
import { ProductCard } from "@/entities/product";
import { ApiClient } from "@/shared/api";

interface Response {
  latest_posts: PostCard[];
  categories: {
    name: string;
    products: ProductCard[];
  }[];
}

export function getHomePageData() {
  return ApiClient.GET<Response>("/homepage");
}
