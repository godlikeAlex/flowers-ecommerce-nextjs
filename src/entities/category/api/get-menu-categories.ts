import { cache } from "react";
import { ApiClient } from "@/shared/api";
import { CategoryMenu } from "../models/types";

type Response = CategoryMenu[];

export const getMenuCategories = cache(async () => {
  try {
    const { data } = await ApiClient.GET<Response>("/menu-categories");

    return data;
  } catch {
    console.error("Whoops error while get menu categories");
    return [];
  }
});
