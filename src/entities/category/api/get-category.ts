import { ApiClient } from "@/shared/api";
import {
  PaginationResponse,
  WithSeoResponse,
} from "@/shared/lib/utility-types";
import { Category, CategoryFacet } from "../models/types";
import type { ProductCard } from "@/entities/product/@x/category";

export type PriceRange = {
  min_price: number;
  max_price: number;
};

interface GetCategoryResponse {
  facets: {
    categories: CategoryFacet[];
    price_range: PriceRange;
  };
  categories_breadcrumbs: Category[];
  products: PaginationResponse<ProductCard>;
  target_category: WithSeoResponse<"category", Category | null>;
}

export async function getCategory(
  path: string = "",
  queryString?: URLSearchParams,
) {
  return ApiClient.GET<GetCategoryResponse>(
    `/categories/${path}?${queryString?.toString()}`,
  );
}
