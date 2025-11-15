import { ApiClient } from "@/shared/api";
import { CategoryMenu } from "../models/types";

type Response = CategoryMenu[];

export async function getMenuCategories() {
  try {
    return ApiClient.GET<Response>("/menu-categories");
  } catch {
    console.error("Whoops error while get menu categories");
  }
}
