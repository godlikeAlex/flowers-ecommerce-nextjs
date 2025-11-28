import Image from "next/image";
import { TrashSimpleIcon } from "@phosphor-icons/react/dist/ssr/TrashSimple";
import { PlusIcon } from "@phosphor-icons/react/dist/ssr/Plus";

import { useProductCart } from "@/widgets/product";
import { ProductAddon } from "@/entities/product";
import { Anchor, Button } from "@/shared/ui";
import { formatPrice } from "@/shared/lib";

import styles from "./ProductAddonCard.module.css";

interface Props {
  addon: ProductAddon;
  onSelectAddon: (addon: ProductAddon) => void;
  isAdded: boolean;
}

export default function ProductAddonCard({
  addon,
  isAdded,
  onSelectAddon,
}: Props) {
  const { options, name, cover } = addon;

  const { addAddon, removeAddon, addonIsDisabled } = useProductCart();

  const baseOption = options.at(0);
  const localPrice = baseOption ? formatPrice(baseOption.price) : undefined;

  return (
    <article className={styles.card}>
      <div className={styles["image-container"]}>
        <Image
          fill
          src={cover}
          className={styles.image}
          alt={name}
          onClick={() => onSelectAddon(addon)}
        />
      </div>

      <div className={styles.details}>
        <Anchor
          onClick={() => onSelectAddon(addon)}
          as="h5"
          variant="basic"
          className={styles.title}
        >
          {name}
        </Anchor>
        {localPrice && (
          <div className="w-100">
            <h6 className={styles.price}>{localPrice}</h6>
            {!isAdded ? (
              <Button
                classNameWrapper={styles.button}
                className="w-100"
                accessoryRight={<PlusIcon />}
                loading={addonIsDisabled}
                onClick={() => addAddon(addon)}
              >
                Add
              </Button>
            ) : (
              <Button
                classNameWrapper={styles.button}
                className="w-100"
                accessoryRight={<TrashSimpleIcon />}
                status="danger"
                loading={addonIsDisabled}
                onClick={() => removeAddon(addon)}
              >
                Remove
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
