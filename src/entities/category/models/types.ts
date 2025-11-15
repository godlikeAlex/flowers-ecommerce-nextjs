export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface CategoryMenu extends Category {
  children: Category[];
}
