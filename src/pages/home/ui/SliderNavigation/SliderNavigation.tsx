import { Carousel } from "@/shared/ui";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";

import styles from "./SliderNavigation.module.css";

export default function SliderNavigation() {
  return (
    <Carousel.Navigation
      containerClassName={styles.navigation}
      nextButtonClassName={styles.buttonArrow}
      prevButtonClassName={styles.buttonArrow}
      nextButtonContent={<ArrowRightIcon weight="bold" />}
      prevButtonContent={<ArrowLeftIcon weight="bold" />}
    />
  );
}
