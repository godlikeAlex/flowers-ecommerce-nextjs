"use client";

import { NumericFormat } from "react-number-format";
import RangeSlider from "react-range-slider-input";

import { Input } from "@/shared/ui";

import styles from "./PriceRange.module.css";
import "react-range-slider-input/dist/style.css";
import "./range-slider.css";

type PriceRangeState = { from: number; to: number };

interface Props {
  min: number;
  max: number;
  from: number;
  to: number;
  disabled: boolean;
  onChange: (updatedState: PriceRangeState) => void;
  onBlur: () => void;
}

export default function PriceRange({
  onChange,
  onBlur,
  from,
  to,
  disabled,
  min,
  max,
}: Props) {
  return (
    <div>
      <div className={styles["price-range-container"]}>
        <div>
          <div className={styles.label}>From</div>

          <NumericFormat
            disabled={disabled}
            value={from}
            customInput={Input}
            className={styles.input}
            onValueChange={(e) => onChange({ from: Number(e.value), to })}
            onBlur={onBlur}
            thousandSeparator=" "
          />
        </div>

        <div>
          <div className={styles.label}>To</div>

          <NumericFormat
            disabled={disabled}
            value={to}
            customInput={Input}
            className={styles.input}
            onValueChange={(e) => onChange({ from, to: Number(e.value) })}
            onBlur={onBlur}
            thousandSeparator=" "
          />
        </div>
      </div>

      <div className="mt-3 pb-2">
        <RangeSlider
          disabled={disabled}
          step={1}
          min={min / 100}
          max={max / 100}
          value={[from, to]}
          onInput={([from, to]) => onChange({ from, to })}
          className={"range-slider"}
        />
      </div>
    </div>
  );
}
