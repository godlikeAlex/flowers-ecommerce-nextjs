"use client";

import { useState } from "react";
import clsx from "clsx";

import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr/ArrowLeft";

import styles from "./CategoryNavigation.module.css";
import type { CategoryFacet } from "../../models/types";
import { resolveCategoryLevel } from "./resolve-category-level";
import CategoryNavigationItem from "./CategoryNavigationItem";

interface Props {
  categories: CategoryFacet[];
  initialHistory: string[];
}

export default function CategoryNavigation({
  categories,
  initialHistory,
}: Props) {
  const [history, setHistory] = useState<string[]>(() => {
    if (initialHistory.length > 1) {
      return initialHistory.toSpliced(-1);
    }

    return initialHistory;
  });

  const { targetCategories, parent } = resolveCategoryLevel({
    currentSlug: history.at(-1),
    categories,
  });

  const selectCategory = (categoryName: string) => {
    setHistory((history) => [...history, categoryName]);
  };

  const handleBack = () => {
    setHistory((history) => {
      return history.toSpliced(-1);
    });
  };

  return (
    <div>
      {parent && (
        <button
          onClick={handleBack}
          className={clsx(
            styles["category-button"],
            styles["category-button-back"],
          )}
        >
          <ArrowLeftIcon />
          Back
        </button>
      )}

      <ul className={clsx("unstyled", styles["category-list"])}>
        {targetCategories.map((category) => {
          return (
            <li key={category.name}>
              <CategoryNavigationItem
                category={category}
                history={history}
                onSelect={(selectedCategorySlug) =>
                  selectCategory(selectedCategorySlug)
                }
              />
            </li>
          );
        })}
        {parent && (
          <li>
            <CategoryNavigationItem.Link href={`/shop/` + history.join("/")}>
              All from {parent.name}
            </CategoryNavigationItem.Link>
          </li>
        )}
      </ul>
    </div>
  );
}
