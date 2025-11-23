import { ProductAddon } from "@/entities/product";
import { Carousel } from "@/shared/ui";

import styles from "./ProductAddons.module.css";
import { CaretLeftIcon } from "@phosphor-icons/react/dist/ssr/CaretLeft";
import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { ProductAddonCard } from "../ProductAddonCard";
import { useState } from "react";
import { AddonModal } from "../AddonModal";

interface Props {
  addons: ProductAddon[];
}

export default function ProductAddons({ addons }: Props) {
  const [selectedAddon, setSelectedAddon] = useState<
    ProductAddon | undefined
  >();

  return (
    <div>
      <AddonModal
        addon={selectedAddon}
        onClose={() => setSelectedAddon(undefined)}
      />

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
                  onSelectAddon={(addon) => setSelectedAddon(addon)}
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
