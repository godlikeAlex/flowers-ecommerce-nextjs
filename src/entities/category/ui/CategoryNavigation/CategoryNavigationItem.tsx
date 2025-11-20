"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import styles from "./CategoryNavigation.module.css";
import { CategoryFacet } from "../../models/types";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr/CheckCircle";
import clsx from "clsx";
import { PropsWithChildren } from "react";

interface Props {
  category: CategoryFacet;
  history: string[];
  onSelect: (slug: string) => void;
}

export default function CategoryNavigationItem({
  category,
  onSelect,
  history,
}: Props) {
  const pathName = usePathname();
  const hasItems = category.children.length > 0;
  const currentPath = [...history, category.slug].join("/");
  const link = `/shop/${currentPath}`;

  const defaultComponentProps = { className: styles["category-button"] };

  if (hasItems) {
    return (
      <button
        {...defaultComponentProps}
        onClick={() => onSelect(category.slug)}
      >
        {category.name} <ArrowRightIcon />
      </button>
    );
  }

  return (
    <CategoryNavigationItem.Link href={link}>
      {category.name}
    </CategoryNavigationItem.Link>
  );
}

CategoryNavigationItem.Link = function CategoryNavigationLink({
  href,
  children,
}: PropsWithChildren<{ href: string }>) {
  const pathName = usePathname();

  return (
    <Link
      className={clsx(
        styles["category-button"],
        pathName === href && styles["category-button-active"],
      )}
      href={href}
    >
      {pathName === href && <CheckCircleIcon />}
      {children}
    </Link>
  );
};
