"use client";

import Link from "next/link";

import { Button } from "@/shared/ui";
import { ProductCard } from "@/widgets/product/ui";

import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";

interface Props {
  title: string;
  products: {
    title: string;
    price: number;
    description: string;
    image: string;
  }[];
}

export default function FeaturedCategoryShowcase({ title, products }: Props) {
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between mb-48">
        <div className="heading">
          <h2>{title}</h2>
        </div>
      </div>

      <div className="row gap-y-4">
        {products.map((product) => (
          <div className="col-md-3 mb-16" key={product.title}>
            <ProductCard
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}

        <div className="col-md-12 mt-48 text-center">
          <Button
            as={Link}
            href=""
            className="mx-auto"
            variant="ghost"
            accessoryRight={<ArrowUpRightIcon />}
            style={{ width: 220 }}
          >
            View All
          </Button>
        </div>
      </div>
    </div>
  );
}
