"use client";

import { useCartRecomendations } from "@/entities/cart";
import { ProductSelectionProvider } from "@/widgets/product";
import Skeleton from "react-loading-skeleton";
import CartRecomendationItem from "./CartRecommendationItem";

export default function CartRecommendation() {
  const addonsRecomendations = useCartRecomendations();

  if (addonsRecomendations.isPending) {
    return (
      <div className="row">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="col-md-3" key={index}>
            <Skeleton height={120} />
          </div>
        ))}
      </div>
    );
  }

  if (addonsRecomendations.isError) return null;
  if (addonsRecomendations.data.length === 0) return null;

  return (
    <div className="row">
      <div className="col-md-12 mb-3">
        <h5>You may find this interesting</h5>
      </div>

      <div className="col-md-12">
        <div className="row row-gap-3">
          {addonsRecomendations.data.map((recommendation) => (
            <div className="col-md-3 col-6" key={recommendation.addon.id}>
              <ProductSelectionProvider
                selectedOption={{
                  id: recommendation.parent_option_id,
                  price: 0,
                  title: null,
                  description: null,
                }}
              >
                <CartRecomendationItem recommendation={recommendation} />
              </ProductSelectionProvider>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
