import { ProductOption } from "@/entities/product";
import ProductOptionCard from "../ProductOptionCard/ProductOptionCard";

import styles from "./ProductOptionsList.module.css";

interface Props {
  options: ProductOption[];
}

export default function ProductOptionsList({ options }: Props) {
  return (
    <div className={styles["product-option-list"]}>
      {options.map((option) => (
        <div key={option.id} className={styles["product-option-list__item"]}>
          <ProductOptionCard productOption={option} />
        </div>
      ))}
    </div>
  );
}
