"use client";

import { ReactNode } from "react";
import { Select } from "@/shared/ui";
import { CaretUpDownIcon } from "@phosphor-icons/react/dist/ssr/CaretUpDown";
import {
  CatalogSort,
  sortShopSchema,
} from "../../model/catalog-filters-schema";
import useFilters from "../../model/useFilters";

const options: Array<{
  value: CatalogSort;
  label: ReactNode;
}> = [
  {
    value: "featured",
    label: "Featured first",
  },
  {
    value: "price_desc",
    label: "Most expensive",
  },
  {
    value: "price_asc",
    label: "Cheapest first",
  },
  {
    value: "latest",
    label: "Newest first",
  },
];

export default function SortSelect() {
  const { filters, applySort } = useFilters();

  const selectedSort = options.find((option) => option.value === filters.sort);

  return (
    <Select
      options={options}
      values={[selectedSort!]}
      onChange={(values) => {
        const [selectedValue] = values;

        if (!selectedValue) return;

        if (typeof selectedValue === "string") return;

        if (selectedValue && "value" in selectedValue) {
          const selectedSort = sortShopSchema.parse(
            selectedValue?.value ?? undefined,
          );

          applySort({ sort: selectedSort });
        }
      }}
      placeholder="Sort by"
      searchable={false}
      multi={false}
      dropdownHandleRenderer={() => <CaretUpDownIcon />}
    />
  );
}
