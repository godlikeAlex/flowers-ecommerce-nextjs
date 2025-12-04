import { Replacement } from "@react-input/mask";

interface Mask {
  mask: string;
  replacement: string | Replacement;
}

export const US_TELEPHONE_MASK: Mask = {
  mask: "+1 (___) ___-__-__",
  replacement: { _: /\d/ },
};
