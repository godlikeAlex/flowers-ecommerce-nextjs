"use client";

import { StarIcon } from "@phosphor-icons/react/dist/ssr/Star";

import styles from "./StarRating.module.css";

interface Props {
  rating: number;
  label?: string;
}

const COUNT_STARS_RATING = [1, 2, 3, 4, 5];

export default function StarRating({ rating, label }: Props) {
  return (
    <div className={styles["rating-container"]}>
      <div className={styles["stars-container"]}>
        {Array.from(COUNT_STARS_RATING, (targetRating) => (
          <StarIcon
            key={targetRating}
            weight={Math.round(rating) >= targetRating ? "fill" : "duotone"}
          />
        ))}
      </div>

      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}
