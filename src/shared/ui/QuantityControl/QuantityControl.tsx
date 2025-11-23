"use client";

import { PlusIcon } from "@phosphor-icons/react/dist/ssr/Plus";
import { MinusIcon } from "@phosphor-icons/react/dist/ssr/Minus";

import styles from "./QuantityControl.module.css";
import { ChangeEvent } from "react";

interface Props {
  value: number;
  classNames?: {
    wrapper?: string;
    decrement?: string;
    increment?: string;
    input?: string;
  };
  onIncrement: () => void;
  onDecrement: () => void;
  onChange?: (quantity: number) => void;
  onBlur?: () => void;
}

export default function QuantityControl({
  value,
  onIncrement,
  onDecrement,
  onChange,
  onBlur,
}: Props) {
  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));

    if (isNaN(numericValue) && value !== "") return;

    if (onChange !== undefined) {
      onChange(value === "" ? -1 : numericValue);
    }
  };

  return (
    <div className={styles["quantity-wrap"]}>
      <button
        onClick={onDecrement}
        className={styles.decrement}
        aria-label="Decrement"
      >
        <MinusIcon />
      </button>

      <input
        type="text"
        aria-label="quantity"
        readOnly={onChange === undefined}
        value={value === -1 ? "" : value}
        onChange={handleChangeQuantity}
        className="number"
        onBlur={onBlur}
      />

      <button
        aria-label="Increment"
        onClick={onIncrement}
        className={styles.increment}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
