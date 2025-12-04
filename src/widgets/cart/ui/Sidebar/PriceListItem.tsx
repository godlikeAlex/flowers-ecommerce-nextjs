import { formatPrice } from "@/shared/lib";
import styles from "./Sidebar.module.css";

interface Props {
  title: string;
  price: number;
}

export function PriceListItem({ title, price }: Props) {
  return (
    <div className={styles["list-price-item"]}>
      <h6 className={styles["list-price-title"]}>{title}</h6>
      <h6 className={styles["list-price-price"]}>{formatPrice(price)}</h6>
    </div>
  );
}
