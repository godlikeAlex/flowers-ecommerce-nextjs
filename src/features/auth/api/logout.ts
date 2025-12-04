import { ApiClient } from "@/shared/api";

export default function logout() {
  return ApiClient.POST("/auth/logout");
}
