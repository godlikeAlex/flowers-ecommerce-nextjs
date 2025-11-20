"use client";

import { Button, Sidebar } from "@/shared/ui";
import { CategoryNavigation } from "@/entities/category/ui";
import { PriceRange } from "../PriceRange";
import { CategoryFacet } from "@/entities/category/models/types";
import type { PriceRange as PriceRangeType } from "@/entities/category";
import { useEffect, useState } from "react";
import { FunnelIcon } from "@phosphor-icons/react/dist/ssr/Funnel";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/dist/client/components/navigation";
import useFilters from "../../model/useFilters";

interface Props {
  categories: CategoryFacet[];
  currentPath: string[];
  priceRange: PriceRangeType;
}

export default function Filters({
  categories,
  currentPath,
  priceRange,
}: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const { filters, applyFilters } = useFilters();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [priceRangeState, setPriceRangeState] = useState(() => {
    if (filters.priceRange) {
      return {
        from: filters.priceRange.from / 100,
        to: filters.priceRange.to / 100,
      };
    }

    return {
      from: priceRange.min_price / 100,
      to: priceRange.max_price / 100,
    };
  });

  useEffect(() => {
    setIsFetching(false); // eslint-disable-line react-hooks/set-state-in-effect
  }, [pathname, searchParams]);

  const revalidatePriceRange = () => {
    setPriceRangeState((priceRangeState) => {
      const minPrice = priceRange.min_price / 100;
      const maxPrice = priceRange.max_price / 100;

      const from = Math.max(Math.min(priceRangeState.from, maxPrice), minPrice);
      const to = Math.min(Math.max(priceRangeState.to, minPrice), maxPrice);

      return {
        from: Math.min(from, to),
        to: Math.max(from, to),
      };
    });
  };

  const handleApplyFilters = () => {
    applyFilters({ priceRange: priceRangeState });
    setIsFetching(true);
  };

  return (
    <Sidebar>
      <Sidebar.Section title="Categories">
        <CategoryNavigation
          categories={categories}
          initialHistory={currentPath}
        />
      </Sidebar.Section>

      <Sidebar.Section title="Price Range">
        <PriceRange
          min={priceRange.min_price}
          max={priceRange.max_price}
          from={priceRangeState.from}
          to={priceRangeState.to}
          onChange={(updatedState) => setPriceRangeState(updatedState)}
          onBlur={revalidatePriceRange}
          disabled={isFetching}
        />
      </Sidebar.Section>

      <Button
        className="w-100"
        accessoryRight={<FunnelIcon />}
        onClick={handleApplyFilters}
        loading={isFetching}
        variant="primary"
      >
        Apply Filters
      </Button>
    </Sidebar>
  );
}
