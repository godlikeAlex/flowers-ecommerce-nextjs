export interface Category {
  id: number;
  name: string;
  slug: string;
  children?: Category[];
}

export interface CategoryMenu extends Category {
  children: Category[];
}

export interface CategoryFacet extends Omit<Category, "children"> {
  parent: Pick<Category, "id" | "slug"> | null;
  children: number[];
}
