"use client";

import { useCart } from "@/entities/cart";
import { CartListItem } from "../CartListItem";
import Skeleton from "react-loading-skeleton";

import styles from "./CartList.module.css";

export default function CartList() {
  const cart = useCart();

  if (cart.isPending)
    return <Skeleton style={{ marginBottom: "20px" }} count={3} height={120} />;

  return (
    <div className={styles.cartList}>
      <div className={styles.cartListHead}>
        <h5 className={styles["cart-list-title"]}>Shopping cart</h5>
        <span className={styles["cart-list-count"]}>
          {cart.data?.items.length} Products
        </span>
      </div>

      <div>
        {cart.data?.items.map((cartItem) => (
          <CartListItem cartItem={cartItem} key={cartItem.id} />
        ))}
      </div>
    </div>
  );
}
