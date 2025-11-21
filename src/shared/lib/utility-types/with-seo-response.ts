export type WithSeoResponse<K extends string, T> = {
  seo: {
    title: string | null;
    description: string | null;
    keywords: string | null;
    og_title: string | null;
    og_description: string | null;
  };
} & {
  [key in K]: T;
};
