import { ProductAddon } from "../models/types";

export function selectAddonID(productAddon: ProductAddon) {
  const option = productAddon.options.at(0);

  return option?.id;
}
