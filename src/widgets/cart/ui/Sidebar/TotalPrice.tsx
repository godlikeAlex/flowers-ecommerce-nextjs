import { formatPrice } from "@/shared/lib";

import styles from "./Sidebar.module.css";

interface Props {
  price: number;
}

export function TotalPrice({ price }: Props) {
  const localePrice = formatPrice(price);

  return (
    <div>
      <hr className="dash-line" />

      <div className={styles.totalSection}>
        <h5>Total</h5>
        <h5>{localePrice}</h5>
      </div>

      <hr className="dash-line" />
    </div>
  );
}
