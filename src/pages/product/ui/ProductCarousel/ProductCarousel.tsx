"use client";

import { useCallback, useEffect, useState } from "react";
import { Carousel } from "@/shared/ui";
import styles from "./ProductCarousel.module.css";
import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { CaretLeftIcon } from "@phosphor-icons/react/dist/ssr/CaretLeft";
import { EmblaCarouselType } from "embla-carousel";
import clsx from "clsx";

const slides = [
  "https://static.euroflorist.com/img/crop/600/600/ergonode/542738fd-bab8-4bcc-8037-54c0b6306fcc.jpg",
  "https://newyorkflowersonline.com/wp-content/uploads/2022/05/PhotoRoom_20231020_164630.jpeg",
  "https://newyorkflowersonline.com/wp-content/uploads/2022/05/IMG_4185-2048x1536.jpeg",
  "https://engraveforfun.nl/wp-content/uploads/2025/08/Photoroom_004_20250829_031223.png",
  "https://engraveforfun.nl/wp-content/uploads/2024/04/globelamp2.png",
  "https://engraveforfun.nl/wp-content/uploads/2024/04/lampvert2.png",
  "https://engraveforfun.nl/wp-content/uploads/2024/03/NaambordjeDino.png",
];

export default function ProductCarousel() {
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
              {slides.map((path, idx) => (
                <Carousel.Item
                  key={path}
                  className={clsx(
                    styles.slideThumb,
                    idx === selectedIndex && styles.slideThumbActive,
                  )}
                  onClick={() => onThumbClick(idx)}
                >
                  <img
                    src={path}
                    onMouseEnter={() => onThumbClick(idx)}
                    alt=""
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
            {slides.map((path) => (
              <Carousel.Item className={styles.slide} key={`1${path}`}>
                <img src={path} alt="" />
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
