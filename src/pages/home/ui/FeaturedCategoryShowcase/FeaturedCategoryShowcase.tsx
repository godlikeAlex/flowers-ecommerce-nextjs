"use client";

import Link from "next/link";

import { Button, Carousel } from "@/shared/ui";
import { ProductCard } from "@/widgets/product/ui";

import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { SliderNavigation } from "../SliderNavigation";

import styles from "./FeaturedCategoryShowcase.module.css";
import type { ProductCard as IProductCard } from "@/entities/product";
import { ROUTES } from "@/shared/config";

interface Props {
  title: string;
  products: IProductCard[];
}

export default function FeaturedCategoryShowcase({ title, products }: Props) {
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between mb-48">
        <div className="heading">
          <h2>{title}</h2>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <Carousel options={{ align: "start" }}>
          <SliderNavigation />

          <Carousel.Content>
            <Carousel.ContainerSlides>
              {products.map((product) => (
                <Carousel.Item className={styles.slide} key={product.id}>
                  <ProductCard
                    slug={product.slug}
                    title={product.name}
                    description={product.card_description}
                    price={product.price}
                    image={product.cover}
                    blur_preview={product.blur_preview}
                  />
                </Carousel.Item>
              ))}
            </Carousel.ContainerSlides>
          </Carousel.Content>
        </Carousel>
      </div>

      <div className="col-md-12 mt-48 text-center">
        <Button
          as={Link}
          href={ROUTES.SHOP([])}
          className="mx-auto"
          variant="ghost"
          accessoryRight={<ArrowUpRightIcon />}
          style={{ width: 220 }}
        >
          View All
        </Button>
      </div>
    </div>
  );
}
