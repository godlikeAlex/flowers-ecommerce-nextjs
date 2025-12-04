import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import Link from "next/link";

import styles from "./CategoryItem.module.css";
import clsx from "clsx";
import { ROUTES } from "@/shared/config";

interface Props {
  title: string;
  slug: string;
}

export default function CategoryItem({ title, slug }: Props) {
  return (
    <Link href={ROUTES.BLOG(slug)} className={clsx(styles.button, "mb-16")}>
      {title} <ArrowRightIcon />
    </Link>
  );
}
