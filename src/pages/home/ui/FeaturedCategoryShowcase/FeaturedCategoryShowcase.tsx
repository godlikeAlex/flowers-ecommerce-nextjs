"use client";

import Link from "next/link";

import { Button, Carousel } from "@/shared/ui";
import { ProductCard } from "@/widgets/product/ui";

import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { SliderNavigation } from "../SliderNavigation";

import styles from "./FeaturedCategoryShowcase.module.css";
import type { ProductCard as IProductCard } from "@/entities/product";

interface Props {
  title: string;
  products: IProductCard[];
  buttonText?: string;
  buttonLink?: string;
}

export default function FeaturedCategoryShowcase({
  title,
  products,
  buttonText,
  buttonLink,
}: Props) {
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between mb-48">
        <div className="heading">
          {/*Sanitized by backend */}
          <h2
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <Carousel options={{ align: "start" }}>
          <SliderNavigation />

          <Carousel.Content>
            <Carousel.ContainerSlides>
              {products.map((product) => (
                <Carousel.Item className={styles.slide} key={product.id}>
                  <ProductCard product={product} />
                </Carousel.Item>
              ))}
            </Carousel.ContainerSlides>
          </Carousel.Content>
        </Carousel>
      </div>

      {buttonLink && buttonText ? (
        <div className="col-md-12 mt-48 text-center">
          <Button
            as={Link}
            href={buttonLink}
            className="mx-auto"
            variant="ghost"
            accessoryRight={<ArrowUpRightIcon />}
            style={{ width: 220 }}
          >
            {buttonText}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
