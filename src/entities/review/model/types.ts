import { MediaAsset } from "@/shared/types";

export interface Review {
  id: string;
  user: {
    name: string;
    avatar: string | null;
  };
  media: MediaAsset[];
  review: string;
  rating: number;
  date: string;
}
