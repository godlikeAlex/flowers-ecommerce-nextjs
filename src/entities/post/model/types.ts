export interface PostCategory {
  id: number;
  name: string;
  slug: string;
}

export interface Post {
  id: number;
  title: string;
  category: PostCategory;
  content: string;
  slug: string;
  published_at: string;
  cover: string;
  blur_preview: string;
}

export interface PostCard {
  id: number;
  title: string;
  category: PostCategory;
  slug: string;
  card_description: string;
  published_at: string;
  cover: string;
  blur_preview: string;
}
