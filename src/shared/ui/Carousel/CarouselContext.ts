import { createContext, useContext } from "react";
import type { EmblaViewportRefType } from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";

type CarouselContextType = {
  emblaRef: EmblaViewportRefType;
  emblaApi?: EmblaCarouselType;
} | null;

export const CarouselContext = createContext<CarouselContextType>(null);

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
};
