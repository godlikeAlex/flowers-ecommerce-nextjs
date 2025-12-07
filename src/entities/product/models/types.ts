import { MediaAsset } from "@/shared/types";

interface SummaryRating {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  rating: number;
  total_reviews: number;
  summary_ratings: SummaryRating;
  description: string;
  card_description: string;
  options: ProductOption[];
  addons: ProductAddon[];
  slider_assets: SliderAsset[];
}

export interface ProductAddon {
  id: number;
  name: string;
  slug: string;
  cover: string;
  description: string;
  options: ProductOption[];
  blur_preview: string;
}

export interface ProductCard {
  id: number;
  name: string;
  slug: string;
  card_description: string;
  price: number;
  cover: string;
  blur_preview: string;
  options: ProductOption[];
}

export interface ProductOption {
  id: number;
  title: string | null;
  description: string | null;
  price: number;
}

export type SliderAsset = MediaAsset;
