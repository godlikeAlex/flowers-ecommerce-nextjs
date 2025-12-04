import z from "zod";

import { emailSchema, passwordSchema } from "@/shared/model/schemas";

export const signinSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type SigninFormValues = z.infer<typeof signinSchema>;
