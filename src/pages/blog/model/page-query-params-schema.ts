import z from "zod";

export const pageQeuryParamsSchema = z
  .string()
  .default("1")
  .transform((page) => parseInt(page))
  .pipe(z.number().min(1))
  .catch(1);
