import { formatPrice } from "@/shared/lib";
import styles from "./ProductOptionCard.module.css";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";
import { ProductOption } from "@/entities/product";
import { useProductSelection } from "../../model/product-selection-context";
import clsx from "clsx";

interface Props {
  productOption: ProductOption;
}

export default function ProductOptionCard({ productOption }: Props) {
  const { selectedOption, selectOption } = useProductSelection();

  return (
    <article
      className={clsx(
        styles["product-option-card"],
        selectedOption?.id === productOption.id && styles["selected"],
      )}
      onClick={() => selectOption(productOption)}
      role="presentation"
    >
      <div className={styles.check}>
        <CheckIcon />
      </div>

      <h6 className={styles.price}>{formatPrice(productOption.price)}</h6>

      {productOption.title && (
        <h5 className={styles.title}>{productOption.title}</h5>
      )}

      {productOption.description && (
        <p className={styles.desc}>{productOption.description}</p>
      )}
    </article>
  );
}
