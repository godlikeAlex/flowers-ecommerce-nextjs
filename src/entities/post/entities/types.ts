export interface PostCard {
  id: number;
  title: string;
  category: {
    name: string;
    slug: string;
  };
  slug: string;
  card_description: string;
  published_at: string;
  cover: string;
}
