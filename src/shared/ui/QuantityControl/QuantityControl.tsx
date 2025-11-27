"use client";

import type { ChangeEvent, ReactNode } from "react";

import { PlusIcon } from "@phosphor-icons/react/dist/ssr/Plus";
import { MinusIcon } from "@phosphor-icons/react/dist/ssr/Minus";

import styles from "./QuantityControl.module.css";
import clsx from "clsx";

interface Props {
  value: number;
  disabled?: boolean;
  iconDecrement?: ReactNode;
  iconIncrement?: ReactNode;
  classNames?: {
    wrapper?: string;
    decrement?: string;
    increment?: string;
  };
  onIncrement: () => void;
  onDecrement: () => void;
  onChange?: (quantity: number) => void;
  onBlur?: () => void;
}

export default function QuantityControl({
  value,
  disabled,
  onIncrement,
  onDecrement,
  onChange,
  onBlur,
  classNames,
  iconIncrement,
  iconDecrement,
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
    <div className={clsx(styles["quantity-wrap"], classNames?.wrapper)}>
      <button
        onClick={onDecrement}
        className={clsx(styles.decrement, classNames?.decrement)}
        aria-label="Decrement"
        disabled={disabled}
      >
        {iconDecrement ? iconDecrement : <MinusIcon />}
      </button>

      <input
        type="text"
        aria-label="quantity"
        readOnly={onChange === undefined}
        value={value === -1 ? "" : value}
        onChange={handleChangeQuantity}
        className="number"
        onBlur={onBlur}
        disabled={disabled}
      />

      <button
        aria-label="Increment"
        onClick={onIncrement}
        className={clsx(styles.increment, classNames?.increment)}
        disabled={disabled}
      >
        {iconIncrement ? iconIncrement : <PlusIcon />}
      </button>
    </div>
  );
}
