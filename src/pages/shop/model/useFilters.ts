"use client";

import { useSearchParams } from "next/navigation";

import {
  catalogFiltersSchema,
  type CatalogFilters,
} from "./catalog-filters-schema";
import { useRouter } from "nextjs-toploader/app";
import { usePathname } from "next/dist/client/components/navigation";

export default function useFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const getCurrentUrlSearchParams = () =>
    new URLSearchParams(searchParams?.toString());

  const resolveFilters = () => {
    return catalogFiltersSchema.parse(
      Object.fromEntries(getCurrentUrlSearchParams().entries()),
    );
  };

  const applyFilters = (
    filters: Omit<CatalogFilters, "page" | "sort">,
    withRedirect: boolean = true,
  ): URLSearchParams => {
    const currentParams = getCurrentUrlSearchParams();

    currentParams.delete("page");

    if (filters.priceRange) {
      currentParams.set(
        "priceRange",
        `${filters.priceRange.from * 100}-${filters.priceRange.to * 100}`,
      );
    }

    if (withRedirect) {
      const query = currentParams.toString();
      const path = `${pathname}?${query}`;

      router.replace(path, { scroll: true });
    }

    return currentParams;
  };

  const applySort = ({ sort }: Pick<CatalogFilters, "sort">) => {
    const currentParams = getCurrentUrlSearchParams();

    currentParams.delete("page");

    currentParams.set("sort", sort);

    const query = currentParams.toString();
    const path = `${pathname}?${query}`;

    router.replace(path, { scroll: true });
  };

  const resetFilters = () => {
    const currentParams = getCurrentUrlSearchParams();

    const ressetedSearchParams = new URLSearchParams();
    const sort = currentParams.get("sort");

    if (sort) {
      ressetedSearchParams.set("sort", sort);
    }

    const query = ressetedSearchParams.toString();
    const path = `${pathname}?${query}`;

    router.replace(path, { scroll: true });
  };

  return {
    getCurrentUrlSearchParams,
    resolveFilters,
    filters: resolveFilters(),
    applyFilters,
    applySort,
    resetFilters,
  };
}
