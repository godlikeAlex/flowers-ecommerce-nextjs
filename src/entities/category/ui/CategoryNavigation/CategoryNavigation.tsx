"use client";

import clsx from "clsx";

import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr/ArrowLeft";

import styles from "./CategoryNavigation.module.css";
import type { CategoryFacet } from "../../models/types";
import CategoryNavigationItem from "./CategoryNavigationItem";
import useCategoryNavigationState from "./useCategoryNavigationState";

interface Props {
  categories: CategoryFacet[];
  initialHistory: string[];
}

export default function CategoryNavigation({
  categories,
  initialHistory = [],
}: Props) {
  const { parent, targetCategories, selectCategory, goBack, baseHistory } =
    useCategoryNavigationState({
      categories,
      initialHistory,
    });

  return (
    <div>
      {parent && (
        <button
          onClick={goBack}
          className={clsx(
            styles["category-button"],
            styles["category-button-back"],
          )}
          type="button"
        >
          <ArrowLeftIcon />
          Back
        </button>
      )}

      <ul className={clsx("unstyled", styles["category-list"])}>
        {targetCategories.map((category) => {
          return (
            <li key={category.slug}>
              <CategoryNavigationItem
                category={category}
                history={baseHistory}
                onSelect={(selectedCategorySlug) =>
                  selectCategory(selectedCategorySlug)
                }
              />
            </li>
          );
        })}
        {parent && (
          <li>
            <CategoryNavigationItem.Link
              href={`/shop/` + baseHistory.join("/")}
            >
              All from {parent.name}
            </CategoryNavigationItem.Link>
          </li>
        )}
      </ul>
    </div>
  );
}
