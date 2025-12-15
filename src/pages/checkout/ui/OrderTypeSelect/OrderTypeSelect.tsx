import { Radio, RadioGroup } from "@headlessui/react";
import { StorefrontIcon } from "@phosphor-icons/react/dist/ssr/Storefront";
import { TruckIcon } from "@phosphor-icons/react/dist/ssr/Truck";

import styles from "./OrderTypeSelect.module.css";
import { formatPrice } from "@/shared/lib";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";

const ORDER_TYPES = [
  {
    type: "delivery",
    label: "Delivery",
    Icon: TruckIcon,
    price: `+${formatPrice(2000)}`,
  },
  {
    type: "pickup",
    label: "Pickup in store",
    Icon: StorefrontIcon,
    price: "Free",
  },
];

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function OrderTypeSelect({ value, onChange }: Props) {
  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      className="d-flex gap-2"
      aria-label="Shipping Method"
    >
      {ORDER_TYPES.map(({ Icon, ...orderType }) => (
        <Radio
          key={orderType.type}
          value={orderType.type}
          className={styles.orderTypeButton}
        >
          <div className={styles.check}>
            <CheckIcon />
          </div>

          <div className={styles.label}>
            <Icon className={styles.icon} />
            {orderType.label}
          </div>

          <span className={styles.price}>{orderType.price}</span>
        </Radio>
      ))}
    </RadioGroup>
  );
}
