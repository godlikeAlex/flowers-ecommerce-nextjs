"use client";

import clsx from "clsx";
import Image from "next/image";
import { Anchor, Button } from "@/shared/ui";
import { format } from "date-fns";
import Link from "next/link";

import { EyesIcon } from "@phosphor-icons/react/dist/ssr/Eyes";

import styles from "./ArticleCard.module.css";

import { ROUTES } from "@/shared/config";
import { PostCard } from "../../model/types";

interface Props {
  postCard: PostCard;
}

export default function ArticleCard({ postCard }: Props) {
  const { title, slug, card_description, published_at, cover, category } =
    postCard;

  const linkToPost = ROUTES.POST_SHOW(slug);

  return (
    <article className={styles["blog-card"]}>
      <figure className={styles.figure}>
        <Image
          placeholder="blur"
          blurDataURL={postCard.blur_preview}
          src={cover}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          style={{ objectFit: "cover" }}
        />
      </figure>
      <div className={styles["text-block"]}>
        <div className={clsx(styles["top-row"], "mb-24")}>
          <div className={styles.author}>
            <Anchor
              href={ROUTES.BLOG(category.slug)}
              className="bold-text color-primary"
            >
              Category: {category.name}
            </Anchor>
          </div>
          <span className={styles.date}>
            {format(new Date(published_at), "d MMMM yyyy")}
          </span>
        </div>
        <Anchor
          as={Link}
          href={linkToPost}
          variant="basic"
          className="title h4 mb-16"
        >
          {title}
        </Anchor>
        <p className="mb-24">{card_description}</p>
        <Button as={Link} href={linkToPost} accessoryRight={<EyesIcon />}>
          Read More
        </Button>
      </div>
    </article>
  );
}
