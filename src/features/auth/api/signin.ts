import { ApiClient, getCsrfToken } from "@/shared/api";

interface SigninDTO {
  email: string;
  password: string;
}

interface SigninResponse {
  token: string;
}

export default async function signin(credentials: SigninDTO) {
  await getCsrfToken();

  return ApiClient.POST<SigninResponse>("/auth/login", credentials);
}
