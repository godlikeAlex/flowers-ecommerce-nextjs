import { PropsWithChildren } from "react";

import styles from "./Sidebar.module.css";
import { PriceListItem } from "./PriceListItem";
import { TotalPrice } from "./TotalPrice";
import clsx from "clsx";

interface Props {
  heading?: string;
  className?: string;
  sticky?: boolean;
}

export default function Sidebar({
  children,
  heading,
  className,
  sticky,
}: PropsWithChildren<Props>) {
  return (
    <aside className={clsx(styles.sidebar, sticky && styles.sticky, className)}>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.content}>{children}</div>
    </aside>
  );
}

Sidebar.PriceListItem = PriceListItem;
Sidebar.Total = TotalPrice;
