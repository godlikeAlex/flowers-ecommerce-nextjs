import { ProductCard } from "@/entities/product/@x/featured-section";

export type FeaturedSection = {
  name: string;
  title: string;
  products: ProductCard[];
  button_link?: string;
  button_text?: string;
};
