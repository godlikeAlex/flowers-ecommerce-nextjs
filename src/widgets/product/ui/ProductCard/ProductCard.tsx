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

interface Props {
  title: string;
  description: string;
  slug: string;
  image: string;
  price: number;
}

export default function ProductCard({
  title,
  description,
  price,
  image,
  slug,
}: Props) {
  const [quantity, setQuantity] = useState(1);

  const localPrice = formatPrice(price);

  const onIncrement = () => setQuantity((quantity) => Math.max(quantity + 1));
  const onDecrement = () => {
    setQuantity((quantity) => Math.max(quantity - 1, 1));
  };

  const onChangeQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);

    if (newQuantity >= 1) {
      // CALL API
    }
  };

  const onBlurQuantity = () => {
    if (quantity < 1) {
      setQuantity(1);
    }
  };

  return (
    <article className={styles["product-card"]}>
      <Link href={ROUTES.PRODUCT(slug)}>
        <figure className={styles.figure}>
          <Image
            src={image}
            alt={title}
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
            {title}
          </Anchor>
          <p className="mb-24">{description}</p>
        </div>

        <div>
          <div className={clsx(styles.price, "mb-32")}>
            <h3>{localPrice}</h3>
          </div>
          <div className={styles["action-block"]}>
            <QuantityControl
              value={quantity}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onChange={onChangeQuantity}
              onBlur={onBlurQuantity}
            />

            <IconButton icon={<ShoppingCartSimpleIcon />} />
          </div>
        </div>
      </div>
    </article>
  );
}
