"use client";

import { Button, Modal } from "@/shared/ui";

import styles from "./AddonModal.module.css";
import { PlusIcon } from "@phosphor-icons/react/dist/ssr/Plus";
import { ProductAddon } from "@/entities/product";
import Image from "next/image";
import { formatPrice } from "@/shared/lib";
import { TrashSimpleIcon } from "@phosphor-icons/react/dist/ssr/TrashSimple";
import { useProductCart } from "@/widgets/product";

interface Props {
  onClose: () => void;
  addon?: ProductAddon;
}

export default function AddonModal({ addon, onClose }: Props) {
  const {
    addAddon,
    removeAddon,
    addonIsDisabled,
    productState: { selectedAddons },
  } = useProductCart();

  if (!addon) return;

  const { cover, name, options, description } = addon;

  const baseOption = options.at(0);
  const localPrice = baseOption ? formatPrice(baseOption.price) : undefined;

  const isAdded = Boolean(
    selectedAddons.find((selectedAddon) => selectedAddon.id === addon.id),
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

              {!isAdded ? (
                <Button
                  className="w-100"
                  accessoryRight={<PlusIcon />}
                  loading={addonIsDisabled}
                  onClick={() => addAddon(addon)}
                >
                  Add
                </Button>
              ) : (
                <Button
                  className="w-100"
                  accessoryRight={<TrashSimpleIcon />}
                  status="danger"
                  loading={addonIsDisabled}
                  onClick={() => removeAddon(addon)}
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
