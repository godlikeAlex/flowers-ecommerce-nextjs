export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
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
}

export interface ProductCard {
  id: number;
  name: string;
  slug: string;
  card_description: string;
  price: number;
  cover: string;
}

export interface ProductOption {
  id: 1;
  title: string | null;
  description: string | null;
  price: number;
}

export interface SliderAsset {
  id: number;
  mime_type: string;
  uuid: string;
  original_url: string;
  compressed_url: string;
  thumb_url: string;
}
