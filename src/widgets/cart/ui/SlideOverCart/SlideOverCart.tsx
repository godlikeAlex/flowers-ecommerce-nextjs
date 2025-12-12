"use client";

import { XIcon } from "@phosphor-icons/react/dist/ssr/X";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Link from "next/link";
import { ROUTES } from "@/shared/config";
import { ShoppingCartSimpleIcon } from "@phosphor-icons/react/dist/ssr/ShoppingCartSimple";
import { ShoppingBagIcon } from "@phosphor-icons/react/dist/ssr/ShoppingBag";
import { useEffect } from "react";
import clsx from "clsx";

import { Button } from "@/shared/ui";

import { useSlideOverCart } from "../../model/SlideOverCartContext";

import styles from "./SlideOverCart.module.css";
import { useCart } from "@/entities/cart";
import Skeleton from "react-loading-skeleton";
import SlideOverCartItem from "./SlideOverCartItem";
import { formatPrice } from "@/shared/lib";

export default function SlideOverCart() {
  const { isOpen, close } = useSlideOverCart();
  const cart = useCart();

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      disableBodyScroll(body);
    } else {
      enableBodyScroll(body);
    }

    return () => {
      enableBodyScroll(body);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={clsx(
          styles["sidebar-cart-curtain"],
          isOpen && styles["sidebar-cart-curtain--open"],
        )}
        aria-hidden="true"
        onClick={close}
      />

      <aside
        className={clsx(
          styles["sidebar-cart"],
          isOpen && styles["sidebar-cart--open"],
        )}
      >
        <div className={styles["cart-block"]}>
          <div className={styles["upper-block"]}>
            <div className="d-flex align-items-center justify-content-between mb-24">
              {cart.isPending || cart.isError ? (
                <Skeleton height={45} width={220} />
              ) : (
                <h5>Shopping Cart ({cart.data.items.length})</h5>
              )}
              <button className={styles["close-button"]} onClick={close}>
                <XIcon className={styles["close-icon"]} />
              </button>
            </div>
            <hr className="dash-line mb-32" />
            <ul className={styles["product-list"]}>
              {cart.isPending || cart.isError
                ? null
                : cart.data.items.map((cartItem) => (
                    <li key={cartItem.id}>
                      <SlideOverCartItem cartItem={cartItem} />
                    </li>
                  ))}
            </ul>
          </div>
          <div className={styles["bottom-block"]}>
            <div className="d-flex justify-content-between align-items-center mb-24">
              <h6>Total:</h6>
              <h6 className="color-primary">
                {formatPrice(cart.data?.total ?? 0)}
              </h6>
            </div>
            <hr className="dash-line mb-24" />
            <div className="row row-gap-2">
              <div className="col-md-6">
                <Button
                  as={Link}
                  accessoryRight={<ShoppingCartSimpleIcon />}
                  href={ROUTES.CART}
                  onClick={() => close()}
                  className="w-100"
                  status="success"
                >
                  View Cart
                </Button>
              </div>
              <div className="col-md-6">
                <Button
                  as={Link}
                  accessoryRight={<ShoppingBagIcon />}
                  onClick={() => close()}
                  href={ROUTES.CHECKOUT}
                  className="w-100"
                  variant="primary"
                >
                  Check Out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
