import { ApiClient } from "@/shared/api";
import { Post } from "../model/types";
import { cache } from "react";
import { WithSeoResponse } from "@/shared/lib/utility-types";

type Response = WithSeoResponse<"post", Post>;

export const getPost = cache((slug: string) => {
  return ApiClient.GET<Response>(`/blog/post/${slug}`);
});
