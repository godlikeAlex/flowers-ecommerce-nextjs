import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { PostCard } from "@/entities/post";
import { ROUTES } from "@/shared/config";
import { Anchor } from "@/shared/ui";

import styles from "./RecentPosts.module.css";

interface Props {
  post: PostCard;
}

export default function RecentPostItem({ post }: Props) {
  const { title, slug, cover, blur_preview, published_at } = post;

  const linkToPost = ROUTES.POST_SHOW(slug);

  return (
    <article className={styles["recent-post-item"]}>
      <Link href={linkToPost}>
        <div className={styles["image-container"]}>
          <Image
            fill
            src={cover}
            placeholder="blur"
            blurDataURL={blur_preview}
            objectFit="cover"
            alt={title}
          />
        </div>
      </Link>

      <div>
        <Anchor
          variant="basic"
          className="h6 mb-12"
          as={Link}
          href={linkToPost}
        >
          {title}
        </Anchor>

        <p className="color-primary">
          {format(new Date(published_at), "d MMMM yyyy")}
        </p>
      </div>
    </article>
  );
}
