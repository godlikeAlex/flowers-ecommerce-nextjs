"use client";

import { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
import clsx from "clsx";
import { Carousel } from "@/shared/ui";
import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { CaretLeftIcon } from "@phosphor-icons/react/dist/ssr/CaretLeft";
import { SliderAsset } from "@/entities/product";

import styles from "./ProductCarousel.module.css";
import Image from "next/image";

interface Props {
  slides: SliderAsset[];
}

export default function ProductCarousel({ slides }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainCarouselApi, setMainCarouselApi] = useState<EmblaCarouselType>();
  const [thumbCarouselApi, setThumbCarouselApi] = useState<EmblaCarouselType>();

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainCarouselApi || !thumbCarouselApi) return;
      mainCarouselApi.scrollTo(index);
    },
    [mainCarouselApi, thumbCarouselApi],
  );

  const onSelect = useCallback(() => {
    if (!mainCarouselApi || !thumbCarouselApi) return;
    setSelectedIndex(mainCarouselApi.selectedScrollSnap());
    thumbCarouselApi.scrollTo(mainCarouselApi.selectedScrollSnap());
  }, [mainCarouselApi, thumbCarouselApi, setSelectedIndex]);

  useEffect(() => {
    if (!mainCarouselApi) return;
    //eslint-disable-next-line
    onSelect();

    mainCarouselApi.on("select", onSelect).on("reInit", onSelect);
  }, [mainCarouselApi, onSelect]);

  return (
    <div className={styles.slidersWrapper}>
      <div className={styles.sliderThumbnails}>
        <Carousel
          onInit={(carouselApi) => setThumbCarouselApi(carouselApi)}
          options={{
            containScroll: "keepSnaps",
            dragFree: true,
            axis: "y",
            direction: "rtl",
          }}
        >
          <Carousel.Content>
            <Carousel.ContainerSlides className={styles.thumbContainer}>
              {slides.map(({ thumb_url }, idx) => (
                <Carousel.Item
                  key={thumb_url}
                  className={clsx(
                    styles.slideThumb,
                    idx === selectedIndex && styles.slideThumbActive,
                  )}
                  onClick={() => onThumbClick(idx)}
                >
                  <Image
                    fill
                    src={thumb_url}
                    preload
                    alt=""
                    onMouseEnter={() => onThumbClick(idx)}
                  />
                </Carousel.Item>
              ))}
            </Carousel.ContainerSlides>
          </Carousel.Content>
        </Carousel>
      </div>

      <Carousel
        fade
        onInit={(carouselApi) => setMainCarouselApi(carouselApi)}
        options={{ loop: true, duration: 0 }}
      >
        <Carousel.Content>
          <Carousel.ContainerSlides className={styles["main-container"]}>
            {slides.map(({ compressed_url }) => (
              <Carousel.Item className={styles.slide} key={compressed_url}>
                <Image src={compressed_url} alt="" preload fill />
              </Carousel.Item>
            ))}
          </Carousel.ContainerSlides>

          <Carousel.Navigation
            containerClassName={styles.navigation}
            nextButtonClassName={styles.buttonArrow}
            prevButtonClassName={styles.buttonArrow}
            nextButtonContent={<CaretRightIcon weight="bold" />}
            prevButtonContent={<CaretLeftIcon weight="bold" />}
          />
        </Carousel.Content>
      </Carousel>
    </div>
  );
}
