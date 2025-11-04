import z from "zod";

export const subscribeSchema = z.object({
  email: z.email(),
});

export type SubscribeFormValues = z.infer<typeof subscribeSchema>;
