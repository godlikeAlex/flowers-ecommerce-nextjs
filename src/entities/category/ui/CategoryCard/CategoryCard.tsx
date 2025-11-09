import clsx from "clsx";

import styles from "./CategoryCard.module.css";
import { Anchor } from "@/shared/ui";
import Link from "next/link";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
  href: string;
  variant: "beige" | "pink" | "yellow";
}

const gradients = {
  pink: styles["bg-gradient-1"],
  beige: styles["bg-gradient-2"],
  yellow: styles["bg-gradient-3"],
};

export default function CategoryCard({
  image,
  name,
  href,
  variant = "pink",
}: Props) {
  const gradient = gradients[variant];

  return (
    <article className={clsx(styles["category-card"], gradient)}>
      <div className="category-title">
        <Link href={href} className={clsx("h5", styles.title)}>
          {name}
        </Link>

        <Anchor variant="hover" className={styles["link-btn"]}>
          Shop Now
        </Anchor>
      </div>
      <Image src={image} width={135} height={135} alt={name} />
    </article>
  );
}
