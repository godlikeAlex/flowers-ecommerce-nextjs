import { Anchor, Button } from "@/shared/ui";
import styles from "./ProductAddonCard.module.css";
import { PlusIcon } from "@phosphor-icons/react/dist/ssr/Plus";
import { ProductAddon } from "@/entities/product";
import Image from "next/image";
import { formatPrice } from "@/shared/lib";
import { useProductSelection } from "../../model/product-selection-context";
import { TrashSimpleIcon } from "@phosphor-icons/react/dist/ssr/TrashSimple";

interface Props {
  addon: ProductAddon;
  onSelectAddon: (addon: ProductAddon) => void;
}

export default function ProductAddonCard({ addon, onSelectAddon }: Props) {
  const { selectedAddons, selectAddon, removeAddon } = useProductSelection();

  const { id, options, name, cover } = addon;
  const baseOption = options.at(0);
  const selectedAddon = selectedAddons.find(
    (selectedAddon) => selectedAddon.id === id,
  );

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
            {!selectedAddon ? (
              <Button
                classNameWrapper={styles.button}
                className="w-100"
                accessoryRight={<PlusIcon />}
                onClick={() => selectAddon(addon)}
              >
                Add
              </Button>
            ) : (
              <Button
                classNameWrapper={styles.button}
                className="w-100"
                accessoryRight={<TrashSimpleIcon />}
                onClick={() => removeAddon(selectedAddon.id)}
                status="danger"
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
