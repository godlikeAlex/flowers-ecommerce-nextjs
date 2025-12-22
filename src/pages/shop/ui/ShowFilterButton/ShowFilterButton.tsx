"use client";

import { IconButton } from "@/shared/ui";
import { FunnelIcon } from "@phosphor-icons/react/dist/ssr/Funnel";
import { useFilterDrawer } from "../Filters/FilterDrawerContext";

export default function ShowFilterButton() {
  const { open } = useFilterDrawer();

  return (
    <IconButton className="d-lg-none" icon={<FunnelIcon />} onClick={open} />
  );
}
