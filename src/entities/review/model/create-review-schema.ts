import z from "zod";
import { emailSchema, nameSchema } from "@/shared/model/schemas";

const MAX_FILE_SIZE = 1000 * 1000 * 10; // 10MB

export const createReviewSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  rating: z
    .number()
    .min(1, "Please rate the product")
    .max(5, "Rating must be between 1 and 5"),
  review: z
    .string()
    .min(5, "Please write a little more detail")
    .max(1200, "The maximum number of characters allowed is 1200"),
  media: z
    .array(
      z
        .instanceof(File)
        .refine(
          (file) => file.size <= MAX_FILE_SIZE,
          "Max allowed size is 10MB",
        )
        .refine(
          (file) =>
            ["image/jpeg", "image/png", "image/webp", "video/mp4"].includes(
              file.type,
            ),
          "Only JPEG, PNG, WebP images and MP4 videos are allowed",
        ),
    )
    .max(5, "You can upload maximum 5 files")
    .optional(),
});
