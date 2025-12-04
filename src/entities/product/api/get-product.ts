import { ApiClient } from "@/shared/api";
import { WithSeoResponse } from "@/shared/lib/utility-types";
import { cache } from "react";
import { Product } from "../models/types";

type Response = WithSeoResponse<"product", Product>;

function getProduct(slug: string) {
  return ApiClient.GET<Response>(`/products/${slug}`);
}

export default cache(getProduct);
