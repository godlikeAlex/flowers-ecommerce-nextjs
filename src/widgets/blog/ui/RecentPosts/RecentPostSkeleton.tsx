"use client";

import clsx from "clsx";

import styles from "./RecentPosts.module.css";
import Skeleton from "react-loading-skeleton";

export default function RecentPostSkeleton() {
  return (
    <div className={clsx(styles["recent-posts-list"], "unstyled")}>
      <Skeleton count={3} height={80} />
    </div>
  );
}
