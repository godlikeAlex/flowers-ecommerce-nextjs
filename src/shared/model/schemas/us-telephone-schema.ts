import z from "zod";
import { generatePattern } from "@react-input/mask";
import { US_TELEPHONE_MASK } from "@/shared/config";

export const usTelephoneSchema = z.string().refine(
  (telephone) => {
    return RegExp(generatePattern("full-inexact", US_TELEPHONE_MASK)).test(
      telephone,
    );
  },
  { error: "Please enter a valid phone number" },
);
