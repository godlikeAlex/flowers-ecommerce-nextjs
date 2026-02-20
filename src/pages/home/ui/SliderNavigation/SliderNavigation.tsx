import { Carousel } from "@/shared/ui";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";

import styles from "./SliderNavigation.module.css";
import clsx from "clsx";

interface Props {
  center?: boolean;
  navigationContainer?: string;
}

export default function SliderNavigation({
  center,
  navigationContainer,
}: Props) {
  return (
    <Carousel.Navigation
      containerClassName={clsx(
        styles.navigation,
        center && styles["navigation--center"],
        navigationContainer,
      )}
      nextButtonClassName={styles.buttonArrow}
      prevButtonClassName={styles.buttonArrow}
      nextButtonContent={<ArrowRightIcon weight="bold" />}
      prevButtonContent={<ArrowLeftIcon weight="bold" />}
    />
  );
}
