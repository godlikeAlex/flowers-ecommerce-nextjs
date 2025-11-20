"use client";

import Link from "next/link";
import Image from "next/image";

import { ArrowClockwiseIcon } from "@phosphor-icons/react/dist/ssr/ArrowClockwise";
import { ShoppingCartSimpleIcon } from "@phosphor-icons/react/dist/ssr/ShoppingCartSimple";
import { EmptyState, Button } from "@/shared/ui";
import useFilters from "../../model/useFilters";

import image from "./empty-image.png";

export default function EmptyStateProducts() {
  const { resetFilters } = useFilters();

  return (
    <EmptyState>
      <EmptyState.Head>
        <EmptyState.Image>
          <Image src={image} alt="No products" />
        </EmptyState.Image>
        <EmptyState.Heading>No products found</EmptyState.Heading>
        <EmptyState.Description>
          We couldn’t find any products right now. <br /> Try clearing your
          filters or browsing our other categories to discover more items.
        </EmptyState.Description>
      </EmptyState.Head>

      <EmptyState.Actions>
        <Button onClick={resetFilters} accessoryRight={<ArrowClockwiseIcon />}>
          Reset Filters
        </Button>
        <Button
          as={Link}
          href="/cart"
          variant="primary"
          accessoryRight={<ShoppingCartSimpleIcon />}
        >
          Go To Cart
        </Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}
