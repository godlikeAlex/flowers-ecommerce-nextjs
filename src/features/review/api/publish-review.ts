import { ApiClient } from "@/shared/api";

interface PublishReviewDTO {
  name: string;
  email: string;
  review: string;
  rating: number;
  media?: File[];
  productID: string | number;
}

export function publishReview({
  productID,
  rating,
  review,
  name,
  email,
  media = [],
}: PublishReviewDTO) {
  const formData = new FormData();

  formData.append("rating", `${rating}`);
  formData.append("review", review);
  formData.append("name", name);
  formData.append("email", email);

  media.forEach((file) => {
    formData.append("media[]", file);
  });

  return ApiClient.POST(`/reviews/publish/${productID}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
