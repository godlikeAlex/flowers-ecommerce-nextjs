import clsx from "clsx";
import Image from "next/image";

import { Anchor, Button } from "@/shared/ui";

import { EyesIcon } from "@phosphor-icons/react/dist/ssr/Eyes";

import styles from "./ArticleCard.module.css";

export default function ArticleCard() {
  return (
    <div className={styles["blog-card"]}>
      <figure className={styles.figure}>
        <Image
          fill
          style={{ objectFit: "cover" }}
          src="/images/blogs/b-1.png"
          alt=""
        />
      </figure>
      <div className={styles["text-block"]}>
        <div className={clsx(styles["top-row"], "mb-24")}>
          <div className={styles.author}>
            <Anchor href="keri" className="bold-text color-primary">
              Category: Williams
            </Anchor>
          </div>
          <span className={styles.date}>14 April, 2024</span>
        </div>
        <a href="blog-detail.html" className="title h4 mb-16">
          Guide to Flower Arranging: Tips and Tricks
        </a>
        <p className="mb-24">
          Lorem ipsum dolor sit amet consectetur. Mauris amet ultrices aliquet
          arcu libero aliquam est nullam sit.
        </p>
        <Button accessoryRight={<EyesIcon />}>Read More</Button>
      </div>
    </div>
  );
}
