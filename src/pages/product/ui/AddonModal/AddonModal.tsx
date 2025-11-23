"use client";

import { Button, Modal } from "@/shared/ui";

import styles from "./AddonModal.module.css";
import { PlusIcon } from "@phosphor-icons/react/dist/ssr/Plus";
import { ProductAddon } from "@/entities/product";
import Image from "next/image";
import { formatPrice } from "@/shared/lib";
import { TrashSimpleIcon } from "@phosphor-icons/react/dist/ssr/TrashSimple";
import { useProductSelection } from "../../model/product-selection-context";

interface Props {
  onClose: () => void;
  addon?: ProductAddon;
}

export default function AddonModal({ addon, onClose }: Props) {
  const { selectedAddons, selectAddon, removeAddon } = useProductSelection();

  if (!addon) return;

  const { cover, name, options, description } = addon;

  const baseOption = options.at(0);
  const localPrice = baseOption ? formatPrice(baseOption.price) : undefined;
  const selectedAddon = selectedAddons.find(
    (selectedAddon) => selectedAddon.id === addon.id,
  );

  return (
    <Modal
      isOpen={Boolean(addon)}
      onClose={onClose}
      customClasses={{ content: styles.content }}
    >
      <div className="row">
        <div className="col-md-6 mb-16">
          <div className={styles.containerImage}>
            <Image fill src={cover} alt={name} />
          </div>
        </div>

        <div className="col-md-6">
          <h5 className="mb-16">{name}</h5>

          <hr className="dash-line mb-16" />

          <div
            className="mb-16"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {localPrice && (
            <>
              <h3 className="mb-16">{localPrice}</h3>

              {!selectedAddon ? (
                <Button
                  className="w-100"
                  accessoryRight={<PlusIcon />}
                  onClick={() => selectAddon(addon)}
                >
                  Add
                </Button>
              ) : (
                <Button
                  className="w-100"
                  accessoryRight={<TrashSimpleIcon />}
                  onClick={() => removeAddon(addon.id)}
                  status="danger"
                >
                  Remove
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}
