"use client";

import { PropsWithChildren, useEffect } from "react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";

import CarouselContent from "./CarouselContent";
import CarouselItem from "./CarouselItem";
import { CarouselContext } from "./CarouselContext";

import CarouselNavigation from "./CarouselNavigation";
import CarouselSlides from "./CarouselSlides";

interface Props {
  options?: EmblaOptionsType;
  fade?: boolean;
  onInit?: (sliderApi: EmblaCarouselType) => void;
}

export default function Carousel({
  options,
  children,
  fade,
  onInit,
}: PropsWithChildren<Props>) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, fade ? [Fade()] : []);

  useEffect(() => {
    if (!onInit || !emblaApi) return;

    onInit(emblaApi);
  }, [onInit, emblaApi]);

  return (
    <CarouselContext.Provider value={{ emblaRef, emblaApi }}>
      {children}
    </CarouselContext.Provider>
  );
}

Carousel.Content = CarouselContent;
Carousel.ContainerSlides = CarouselSlides;
Carousel.Item = CarouselItem;
Carousel.Navigation = CarouselNavigation;
