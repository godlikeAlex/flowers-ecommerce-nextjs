"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

import { ShoppingCartSimpleIcon } from "@phosphor-icons/react/dist/ssr/ShoppingCartSimple";

import { Anchor, IconButton, QuantityControl } from "@/shared/ui";

import styles from "./ProductCard.module.css";
import Image from "next/image";
import { ROUTES } from "@/shared/config";
import { formatPrice } from "@/shared/lib";
import { useProductInCart } from "@/features/product";
import { useProductCart } from "../../model/use-product-сart";
import { ProductSelectionProvider } from "../../model/product-selection-context";
import { ProductCard as ProductCardType } from "@/entities/product";
import ControlProductQuantity from "./ControlProductQuantity";

interface Props {
  product: ProductCardType;
}

export default function ProductCard({ product }: Props) {
  const {
    id,
    name,
    card_description,
    price,
    cover,
    slug,
    blur_preview,
    options,
  } = product;

  const { cartItem } = useProductInCart({ productID: id });

  const localPrice = formatPrice(price);

  return (
    <article className={styles["product-card"]}>
      <Link href={ROUTES.PRODUCT(slug)}>
        <figure className={styles.figure}>
          <Image
            placeholder="blur"
            blurDataURL={blur_preview}
            src={cover}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            style={{ objectFit: "cover" }}
          />
        </figure>
      </Link>

      <div className={styles["text-block"]}>
        <div>
          <Anchor
            as={Link}
            variant="basic"
            href={ROUTES.PRODUCT(slug)}
            className="h4 mb-16"
          >
            {name}
          </Anchor>
          <p className="mb-24">{card_description}</p>
        </div>

        <div>
          <div className={clsx(styles.price, "mb-32")}>
            <h3>{localPrice}</h3>
          </div>
          <ProductSelectionProvider
            selectedOption={cartItem?.product_option ?? options[0]}
          >
            <div className={styles["action-block"]}>
              <ControlProductQuantity />
            </div>
          </ProductSelectionProvider>
        </div>
      </div>
    </article>
  );
}
