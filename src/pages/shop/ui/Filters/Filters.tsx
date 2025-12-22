"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/dist/client/components/navigation";

import { FunnelIcon } from "@phosphor-icons/react/dist/ssr/Funnel";
import { XIcon } from "@phosphor-icons/react/dist/ssr/X";
import { CategoryFacet } from "@/entities/category/models/types";

import { Button, Sidebar } from "@/shared/ui";
import { CategoryNavigation } from "@/entities/category/ui";
import type { PriceRange as PriceRangeType } from "@/entities/category";

import { PriceRange } from "../PriceRange";
import useFilters from "../../model/useFilters";

import styles from "./Filters.module.css";
import { useFilterDrawer } from "./FilterDrawerContext";
import clsx from "clsx";

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

  const { isOpen, close } = useFilterDrawer();

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
    close();
    setIsFetching(true);
  };

  return (
    <div className={clsx(styles["sidebar-root"], isOpen && styles.open)}>
      <Sidebar className={styles.sidebar}>
        <header className="d-xl-none d-flex align-items-center">
          <h3 className="color-primary">Filters</h3>

          <button className={styles["close-sidebar"]} onClick={close}>
            <XIcon />
          </button>
        </header>

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

      <div className={styles.overlay} onClick={close} aria-hidden="true" />
    </div>
  );
}
