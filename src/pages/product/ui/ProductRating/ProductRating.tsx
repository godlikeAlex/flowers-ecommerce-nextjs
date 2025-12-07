"use client";

import { StarIcon } from "@phosphor-icons/react/dist/ssr/Star";

import styles from "./ProductRating.module.css";

interface Props {
  rating: number;
  totalReviews: number;
}

const COUNT_STARS_RATING = [1, 2, 3, 4, 5];

export default function ProductRating({ rating, totalReviews }: Props) {
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

      {totalReviews > 0 ? (
        <span className={styles.label}>
          {rating} ({totalReviews})
        </span>
      ) : (
        <span className={styles.label}>No Reviews</span>
      )}
    </div>
  );
}
