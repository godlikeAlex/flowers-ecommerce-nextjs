"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

import { ShoppingCartSimpleIcon } from "@phosphor-icons/react/dist/ssr/ShoppingCartSimple";

import { IconButton, QuantityControl } from "@/shared/ui";

import styles from "./ProductCard.module.css";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  price: number;
}

export default function ProductCard({
  title,
  description,
  price,
  image,
}: Props) {
  const [quantity, setQuantity] = useState(1);

  const localPrice = (price / 100).toLocaleString();

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
      <figure className={styles.figure}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          style={{ objectFit: "cover" }}
        />
      </figure>
      <div className={styles["text-block"]}>
        <div>
          <Link href="product-detail.html" className="h4 mb-16">
            {title}
          </Link>
          <p className="mb-24">{description}</p>
        </div>

        <div>
          <div className={clsx(styles.price, "mb-32")}>
            <h3>${localPrice}</h3>
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
