import { useState } from "react";
import { resolveCategoryLevel } from "./resolve-category-level";
import { CategoryFacet } from "../../models/types";

type Params = {
  initialHistory: string[];
  categories: CategoryFacet[];
};

export default function useCategoryNavigationState({
  initialHistory,
  categories,
}: Params) {
  const [history, setHistory] = useState<string[]>(() => {
    return initialHistory;
  });

  const { targetCategories, parent } = resolveCategoryLevel({
    currentSlug: history.at(-1),
    categories,
  });

  const baseHistory = getBaseHistory(history, parent?.slug);

  const selectCategory = (categoryName: string) => {
    setHistory((history) => {
      const baseHistory = getBaseHistory(history, parent?.slug);

      return [...baseHistory, categoryName];
    });
  };

  const handleBack = () => {
    setHistory((history) => {
      return getBaseHistory(history, parent?.slug).slice(0, -1);
    });
  };

  return {
    baseHistory,
    goBack: handleBack,
    selectCategory,
    targetCategories,
    parent,
  };
}

function getBaseHistory(history: string[], parentSlug?: string) {
  if (!parentSlug) return history;

  const parentIndex = history.lastIndexOf(parentSlug);
  if (parentIndex < 0) return history;

  return history.slice(0, parentIndex + 1);
}
