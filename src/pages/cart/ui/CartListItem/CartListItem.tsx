import { CartItem } from "@/entities/cart";
import Image from "next/image";

import styles from "./CartListItem.module.css";
import { TrashSimpleIcon } from "@phosphor-icons/react/dist/ssr/TrashSimple";
import { QuantityControl } from "@/shared/ui";
import { formatPrice } from "@/shared/lib";
import { useDeleteCartItem, useSetQuantity } from "@/features/cart";
import { toast } from "sonner";

interface Props {
  cartItem: CartItem;
}

export default function CartListItem({ cartItem }: Props) {
  const deleteCartItemMutation = useDeleteCartItem();
  const setQuantityMutation = useSetQuantity();

  const { product, product_option, total, quantity } = cartItem;

  const localePrice = formatPrice(total);
  const isPending =
    deleteCartItemMutation.isPending || setQuantityMutation.isPending;

  const handleIncrementQuantity = () => {
    setQuantityMutation.mutate({
      cart_item_id: cartItem.id,
      quantity: quantity + 1,
    });
  };
  const handleDecrementQuantity = () => {
    if (quantity <= 1) {
      handleDeleteCartItem();
      return;
    }

    setQuantityMutation.mutate({
      cart_item_id: cartItem.id,
      quantity: quantity - 1,
    });
  };

  const handleDeleteCartItem = async () => {
    try {
      await deleteCartItemMutation.mutateAsync(cartItem.id);
      let message = "🗑️ Item has been removed from your cart";

      if (cartItem.addons.length > 0) {
        message = "🗑️ Item removed along with all its addons";
      }

      toast.success(message, {
        position: "bottom-center",
      });
    } catch {
      toast.error("Whoops... something went wrong...", {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className={styles.cartItem}>
      <div className="row">
        <div className="col-md-7">
          <div className="d-flex gap-3">
            <Image
              src={product.image ?? ""}
              width={110}
              height={110}
              alt={product.name}
              className={styles.image}
            />

            <div className="d-flex flex-column gap-2">
              <h4 className={styles.productName}>{product.name}</h4>

              <p className={styles.optionsDescription}>
                {product_option.title}
              </p>

              <button
                className={styles.deleteButton}
                onClick={handleDeleteCartItem}
                disabled={isPending}
              >
                <TrashSimpleIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-5 mt-4 mt-lg-0 gap-1">
          <div className="d-flex justify-content-between">
            <QuantityControl
              value={quantity}
              onIncrement={handleIncrementQuantity}
              onDecrement={handleDecrementQuantity}
              disabled={isPending}
              iconDecrement={
                quantity === 1 ? <TrashSimpleIcon fill="#FA5252" /> : undefined
              }
            />

            <h5>{localePrice}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
