import { getRecentPosts, PostCard } from "@/entities/post";

import styles from "./RecentPosts.module.css";
import RecentPostItem from "./RecentPostItem";
import clsx from "clsx";
import RecentPostSkeleton from "./RecentPostSkeleton";

export default async function RecentPosts() {
  let recentPosts: PostCard[] = [];

  try {
    const { data } = await getRecentPosts();

    recentPosts = data;
  } catch (e) {
    console.log("Error while loading recent posts", e);
  }

  return (
    <ul className={clsx(styles["recent-posts-list"], "unstyled")}>
      {recentPosts.map((recentPost) => (
        <li key={recentPost.id}>
          <RecentPostItem post={recentPost} />
        </li>
      ))}
    </ul>
  );
}

RecentPosts.Skeleton = RecentPostSkeleton;
