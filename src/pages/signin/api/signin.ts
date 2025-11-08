import { ApiClient, getCsrfToken } from "@/shared/api";
import { SigninFormValues } from "../model/signin-schema";

interface SigninResponse {
  token: string;
}

export default async function signin(credentials: SigninFormValues) {
  await getCsrfToken();

  return ApiClient.POST<SigninResponse>("/auth/login", credentials);
}
