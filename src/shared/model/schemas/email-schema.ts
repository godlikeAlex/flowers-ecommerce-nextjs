import z from "zod";

export const emailSchema = z
  .email({
    error: "Please enter a valid email address",
  })
  .min(1, { error: "Please enter email address" });
