import { ApiClient } from "@/shared/api";
import { User } from "../models/types";

export async function getUser(): Promise<User | null> {
  try {
    const user = await ApiClient.GET<User>("/user");
    return user.data;
  } catch {
    return null;
  }
}
