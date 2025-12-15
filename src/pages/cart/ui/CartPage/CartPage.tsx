"use client";

import { EmptyState, PageBanner } from "@/shared/ui";
import { CartList } from "../CartList";
import { CartSidebar } from "../CartSidebar";
import { useCart } from "@/entities/cart";

import image from "./empty-cart-image.png";
import Image from "next/image";
import CartRecommendation from "../CartRecommendation/CartRecommendation";

export default function CartPage() {
  const cart = useCart();

  return (
    <>
      <PageBanner title="Shopping Cart" />

      <section className="py-80">
        <div className="container">
          <div className="row">
            {!cart.isPending && cart.data?.items.length === 0 ? (
              <div className="col-md-12 ">
                <EmptyState>
                  <EmptyState.Head>
                    <EmptyState.Image>
                      <Image src={image} priority alt="Empty cart" />
                    </EmptyState.Image>

                    <EmptyState.Heading>Your cart is empty</EmptyState.Heading>
                    <EmptyState.Description>
                      Add some products to get started 💙
                    </EmptyState.Description>
                  </EmptyState.Head>
                </EmptyState>
              </div>
            ) : (
              <>
                <div className="col-lg-8 col-md-12">
                  <CartList />

                  <div className="mt-5">
                    <CartRecommendation />
                  </div>
                </div>

                <div className="col-md-12 col-lg-4 mt-3 mt-lg-0">
                  <CartSidebar />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
