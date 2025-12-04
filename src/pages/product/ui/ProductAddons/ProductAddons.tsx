import { useState } from "react";
import { CaretLeftIcon } from "@phosphor-icons/react/dist/ssr/CaretLeft";
import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr/CaretRight";

import { useProductCart } from "@/widgets/product";
import { ProductAddon } from "@/entities/product";
import { Carousel } from "@/shared/ui";

import { ProductAddonCard } from "../ProductAddonCard";
import { AddonModal } from "../AddonModal";

import styles from "./ProductAddons.module.css";

interface Props {
  addons: ProductAddon[];
}

export default function ProductAddons({ addons }: Props) {
  const [modalAddon, setModalAddon] = useState<ProductAddon | undefined>();

  const {
    productState: { selectedAddons },
  } = useProductCart();

  const checkAddonIsAdded = (targetAddon: ProductAddon) => {
    return Boolean(
      selectedAddons.find(
        (selectedAddon) => selectedAddon.id === targetAddon.id,
      ),
    );
  };

  return (
    <div>
      <AddonModal addon={modalAddon} onClose={() => setModalAddon(undefined)} />

      <span className="bold-text accent-dark mb-16 d-block">
        Make It Extra Special
      </span>

      <Carousel options={{ align: "start" }}>
        <Carousel.Content>
          <Carousel.ContainerSlides>
            {addons.map((addon) => (
              <Carousel.Item className={styles.slide} key={addon.id}>
                <ProductAddonCard
                  addon={addon}
                  isAdded={checkAddonIsAdded(addon)}
                  onSelectAddon={(addon) => setModalAddon(addon)}
                />
              </Carousel.Item>
            ))}
          </Carousel.ContainerSlides>
        </Carousel.Content>

        <Carousel.Navigation
          containerClassName={styles.navigation}
          nextButtonClassName={styles.buttonArrow}
          prevButtonClassName={styles.buttonArrow}
          nextButtonContent={<CaretRightIcon weight="bold" />}
          prevButtonContent={<CaretLeftIcon weight="bold" />}
        />
      </Carousel>
    </div>
  );
}
