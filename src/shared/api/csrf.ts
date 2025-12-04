import { createAxiosInstance } from "./axios-client";

export async function getCsrfToken() {
  const apiClient = await createAxiosInstance();

  return apiClient.get("/sanctum/csrf-cookie", {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });
}
