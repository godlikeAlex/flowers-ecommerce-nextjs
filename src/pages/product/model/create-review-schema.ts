import z from "zod";
import { emailSchema, nameSchema } from "@/shared/model/schemas";

const MAX_FILE_SIZE = 1000 * 1000 * 10; // 10MB

export const createReviewSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  rating: z
    .number("Please rate the product")
    .min(1, "Please rate the product")
    .max(5, "Rating must be between 1 and 5"),
  review: z
    .string()
    .min(5, "Please write a little more detail")
    .max(1200, "The maximum number of characters allowed is 1200"),
  media: z
    .array(z.instanceof(File))
    .max(5, "You can upload maximum 5 files")
    .superRefine((files, ctx) => {
      if (!files) return;

      for (const file of files) {
        if (file.size > MAX_FILE_SIZE) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "All files must be smaller than 10MB",
          });
          return;
        }

        if (
          !["image/jpeg", "image/png", "image/webp", "video/mp4"].includes(
            file.type,
          )
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Only JPEG, PNG, WebP images and MP4 videos are allowed",
          });
          return;
        }
      }
    })
    .optional(),
});

export type CreateReviewForm = z.infer<typeof createReviewSchema>;
