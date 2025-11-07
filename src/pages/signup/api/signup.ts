import { ApiClient, getCsrfToken } from "@/shared/api";
import { SignupFormValues } from "../model/signup-schema";

interface SignupResponse {
  token: string;
}

export async function signup(data: SignupFormValues) {
  await getCsrfToken();

  return ApiClient.POST<SignupResponse>("/auth/register", data);
}
