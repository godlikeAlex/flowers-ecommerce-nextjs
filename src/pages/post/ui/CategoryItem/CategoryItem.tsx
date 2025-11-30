import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import Link from "next/link";

import styles from "./CategoryItem.module.css";
import clsx from "clsx";

interface Props {
  title: string;
}

export default function CategoryItem({ title }: Props) {
  return (
    <Link href="/" className={clsx(styles.button, "mb-16")}>
      {title} <ArrowRightIcon />
    </Link>
  );
}
