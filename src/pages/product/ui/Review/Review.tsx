import { AvatarPlaceholder, StarRating } from "@/shared/ui";
import clsx from "clsx";

import styles from "./Review.module.css";
import type { Review as ReviewType } from "@/entities/review";
import { formatNYTime } from "@/shared/lib";

type Props = Omit<ReviewType, "id"> & { showDivider?: boolean };

export default function Review({
  review,
  user,
  rating,
  date,
  showDivider = true,
}: Props) {
  return (
    <article>
      <div className={clsx(styles.review, "mb-24")}>
        <AvatarPlaceholder name={user.name} size={64} />

        <div className="content">
          <h6 className="mb-8">{user.name}</h6>
          <div className="mb-16">
            <StarRating rating={rating} />
          </div>

          <p className="mb-16">{review}</p>
          <p className={styles.date}>{formatNYTime(date, "MMMM dd yyyy")}</p>
        </div>
      </div>

      {showDivider && <hr className="dash-line" />}
    </article>
  );
}
