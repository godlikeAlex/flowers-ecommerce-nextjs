import { CategoryFacet } from "../../models/types";

interface Params {
  currentSlug?: string;
  categories: CategoryFacet[];
}

function findBySlug(categories: CategoryFacet[], slug?: string) {
  return categories.find((category) => category.slug === slug);
}

function findChildren(categories: CategoryFacet[], parentSlug?: string) {
  if (!parentSlug) {
    return categories.filter((category) => category.parent === null);
  }

  return categories.filter((category) => category.parent?.slug === parentSlug);
}

export function resolveCategoryLevel({ currentSlug, categories }: Params) {
  let currentCategory = findBySlug(categories, currentSlug);

  if (!currentCategory) {
    return { parent: null, targetCategories: findChildren(categories) };
  }

  while (currentCategory.children.length === 0) {
    const parentSlug = currentCategory.parent?.slug;

    if (!parentSlug) {
      break;
    }

    const parentCategory = findBySlug(categories, parentSlug);

    if (!parentCategory) {
      break;
    }

    currentCategory = parentCategory;
  }

  return {
    parent: currentCategory || null,
    targetCategories: findChildren(categories, currentCategory.slug),
  };
}
