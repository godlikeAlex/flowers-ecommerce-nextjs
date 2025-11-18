"use client";

import { Button, Sidebar } from "@/shared/ui";
import { CategoryNavigation } from "@/entities/category/ui";
import { PriceRange } from "../PriceRange";
import { CategoryFacet } from "@/entities/category/models/types";
import type { PriceRange as PriceRangeType } from "@/entities/category";
import { useEffect, useState } from "react";
import { FunnelIcon } from "@phosphor-icons/react/dist/ssr/Funnel";
import { usePathname } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import { useSearchParams } from "next/dist/client/components/navigation";

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
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [priceRangeState, setPriceRangeState] = useState(() => ({
    from: priceRange.min_price / 100,
    to: priceRange.max_price / 100,
  }));

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

  const applyFilters = () => {
    const currentParams = new URLSearchParams(searchParams?.toString());

    currentParams.delete("page");

    currentParams.set("from", `${priceRangeState.from * 100}`);
    currentParams.set("to", `${priceRangeState.to * 100}`);

    const query = currentParams.toString();

    router.replace(`${pathname}?${query}`, { scroll: false });
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
        onClick={applyFilters}
        loading={isFetching}
        variant="primary"
      >
        Apply Filters
      </Button>
    </Sidebar>
  );
}
