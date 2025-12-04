import z from "zod";

export const passwordSchema = z.string().min(7, {
  error: (issue) => `Password must be at least ${issue.minimum} characters`,
});
