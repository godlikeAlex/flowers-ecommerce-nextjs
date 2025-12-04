import z from "zod";
import {
  emailSchema,
  nameSchema,
  usTelephoneSchema,
} from "@/shared/model/schemas";

export const contactUsSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: usTelephoneSchema,
  message: z.string().optional(),
});

export type ContactUsForm = z.infer<typeof contactUsSchema>;
