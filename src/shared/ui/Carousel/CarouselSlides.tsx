import { PropsWithChildren } from "react";
import styles from "./Carousel.module.css";

interface Props {
  className?: string;
}

export default function CarouselSlides({
  children,
  className = styles.container,
}: PropsWithChildren<Props>) {
  return <div className={className}>{children}</div>;
}
