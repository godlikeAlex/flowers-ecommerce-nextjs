import styles from "./SlideOverCart.module.css";
import Image from "next/image";
import { CartItem } from "@/entities/cart";
import { formatPrice } from "@/shared/lib";
import { TrashSimpleIcon } from "@phosphor-icons/react/dist/ssr/TrashSimple";
import { useDeleteCartItem } from "@/features/cart";

interface Props {
  cartItem: CartItem;
}

export default function SlideOverCartItem({ cartItem }: Props) {
  const { product, total, quantity } = cartItem;
  const deleteCartItemMutation = useDeleteCartItem();

  const localePrice = formatPrice(total);

  return (
    <div className="d-flex align-items-start justify-content-between mb-24">
      <div className={styles["product-block"]}>
        <a href="product-detail.html" className={styles["img-block"]}>
          <Image
            src={product.image ?? ""}
            fill
            alt={product.name}
            className={styles.image}
            style={{ objectFit: "cover" }}
          />
        </a>
        <div>
          <h6 className="h6 mb-16">{product.name}</h6>
          <p className="mb-8 accent-dark">Quantity: {quantity}</p>
          <p className="bold-text accent-dark">{localePrice}</p>
        </div>
      </div>
      <button
        onClick={() => deleteCartItemMutation.mutate(cartItem.id)}
        disabled={deleteCartItemMutation.isPending}
        className={styles["delete-icon"]}
      >
        <TrashSimpleIcon />
      </button>
    </div>
  );
}
