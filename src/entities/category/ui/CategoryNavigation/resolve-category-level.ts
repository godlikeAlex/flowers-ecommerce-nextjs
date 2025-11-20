import { CategoryFacet } from "../../models/types";

interface Params {
  currentSlug?: string;
  categories: CategoryFacet[];
}

export function resolveCategoryLevel({ currentSlug, categories }: Params) {
  const children = categories.filter((category) => {
    if (!currentSlug) {
      return category.parent === null;
    }

    return category.parent?.slug === currentSlug;
  });
  const parent = categories.find((category) => category.slug === currentSlug);

  return { parent: parent || null, targetCategories: children };
}
