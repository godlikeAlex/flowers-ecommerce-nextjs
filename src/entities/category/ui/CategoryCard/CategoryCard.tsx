import clsx from "clsx";

import styles from "./CategoryCard.module.css";
import Link from "next/link";
import Image from "next/image";

export const CATEGORY_CARD_COLORS = [
  "green",
  "blue",
  "pink",
  "beige",
  "lightBlue",
  "primaryBlue",
] as const;

interface Props {
  name: string;
  image?: string | null;
  href: string;
  variant: (typeof CATEGORY_CARD_COLORS)[number];
}

const gradients = {
  green: styles["bg-gradient-1"],
  blue: styles["bg-gradient-2"],
  pink: styles["bg-gradient-3"],
  beige: styles["bg-gradient-4"],
  lightBlue: styles["bg-gradient-5"],
  primaryBlue: styles["bg-gradient-6"],
};

export default function CategoryCard({
  image,
  name,
  href,
  variant = "green",
}: Props) {
  const gradient = gradients[variant];

  const finalImage = image ?? "/images/categories/category-01.png";

  return (
    <Link href={href} className={clsx(styles["category-card"], gradient)}>
      <div className="category-title">
        <h5 className={clsx("h5", styles.title)}>{name}</h5>

        <span className={styles["link-btn"]}>Shop Now</span>
      </div>
      <Image src={finalImage} width={135} height={135} alt={name} />
    </Link>
  );
}
