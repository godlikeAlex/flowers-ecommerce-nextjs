import { CartAddonRecomendation } from "@/entities/cart";
import { ProductAddon } from "@/entities/product";
import { useProductCart } from "@/widgets/product";
import { ProductAddonCard } from "@/widgets/product/ui";
import { AddonModal } from "@/widgets/product/ui/AddonModal";
import { useState } from "react";

interface Props {
  recommendation: CartAddonRecomendation;
}

export default function CartRecomendationItem({ recommendation }: Props) {
  const [modalAddon, setModalAddon] = useState<ProductAddon | undefined>();
  const {
    productState: { selectedAddons },
  } = useProductCart();

  const checkAddonIsAdded = () => {
    return Boolean(
      selectedAddons.find(
        (selectedAddon) => selectedAddon.id === recommendation.addon.id,
      ),
    );
  };

  return (
    <>
      <AddonModal addon={modalAddon} onClose={() => setModalAddon(undefined)} />

      <ProductAddonCard
        addon={recommendation.addon}
        isAdded={checkAddonIsAdded()}
        onSelectAddon={() => setModalAddon(recommendation.addon)}
      />
    </>
  );
}
