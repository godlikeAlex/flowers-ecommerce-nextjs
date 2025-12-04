import { objectToSearchParams } from "@/shared/lib";

import { CatalogFilters } from "../model/catalog-filters-schema";

export function buildFilterQueryString(
  filters: CatalogFilters,
): URLSearchParams {
  const transformedFilters = {
    ...filters,
    priceRange: filters.priceRange
      ? `${filters.priceRange.from}-${filters.priceRange.to}`
      : undefined,
  };

  return objectToSearchParams(transformedFilters);
}
