import z from "zod";

import {
  nameSchema,
  passwordSchema,
  emailSchema,
} from "@/shared/model/schemas";

export const signupSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export type SignupFormValues = z.infer<typeof signupSchema>;
