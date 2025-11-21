import { ReactNode, useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
import { useCarousel } from "./CarouselContext";

interface Props {
  containerClassName?: string;
  nextButtonClassName?: string;
  prevButtonClassName?: string;
  nextButtonContent: ReactNode;
  prevButtonContent: ReactNode;
}

export default function CarouselNavigation({
  containerClassName,
  nextButtonClassName,
  prevButtonClassName,
  prevButtonContent,
  nextButtonContent,
}: Props) {
  const { emblaApi } = useCarousel();

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    //eslint-disable-next-line
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={containerClassName}>
      <button
        className={prevButtonClassName}
        disabled={prevBtnDisabled}
        onClick={onPrevButtonClick}
      >
        {prevButtonContent}
      </button>
      <button
        className={nextButtonClassName}
        disabled={nextBtnDisabled}
        onClick={onNextButtonClick}
      >
        {nextButtonContent}
      </button>
    </div>
  );
}
