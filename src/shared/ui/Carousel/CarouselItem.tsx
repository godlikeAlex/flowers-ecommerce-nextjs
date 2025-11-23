import { PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./Carousel.module.css";

interface Props {
  className?: string;
  onClick?: () => void;
}

export default function CarouselItem({
  className,
  ...props
}: PropsWithChildren<Props>) {
  return <div className={clsx(styles.slide, className)} {...props} />;
}
