import type { PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./Carousel.module.css";
import { useCarousel } from "./CarouselContext";

export default function CarouselContent({ children }: PropsWithChildren) {
  const { emblaRef } = useCarousel();

  return (
    <div className={clsx(styles.viewport)} ref={emblaRef}>
      {children}
    </div>
  );
}
