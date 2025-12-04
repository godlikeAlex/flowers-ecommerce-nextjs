import clsx from "clsx";
import { useState } from "react";
import styles from "./ReviewSection.module.css";
import { StarIcon } from "@phosphor-icons/react/dist/ssr/Star";

interface Props {
  disabled?: boolean;
  value: number;
  onChange: (value: number) => void;
}

export default function RatingInput({ value, onChange, disabled }: Props) {
  const [visitedStar, setVisitedInput] = useState<number>();

  return (
    <div className={styles.ratingInput}>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
        <button
          onClick={() => onChange(star)}
          key={star}
          disabled={disabled}
          onMouseEnter={() => !disabled && setVisitedInput(star)}
          onMouseLeave={() => !disabled && setVisitedInput(undefined)}
          className={clsx(styles.ratingInputStar, {
            [styles.ratingInputStarActive]: visitedStar
              ? visitedStar >= star
              : value >= star,
          })}
          type="button"
        >
          <StarIcon weight="fill" className={styles.ratingInputStarIcon} />
        </button>
      ))}
    </div>
  );
}
