import { ApiClient } from "@/shared/api";
import { PaginationResponse } from "@/shared/lib/utility-types";
import { Category, CategoryFacet } from "../models/types";

type Product = {
  name: string;
};

interface GetCategoryResponse {
  facets: {
    categories: CategoryFacet[];
  };
  categories_breadcrumbs: Category[];
  products: PaginationResponse<Product>;
}

export async function getCategory(path: string) {
  return ApiClient.GET<GetCategoryResponse>(`/categories/${path}`);
}
