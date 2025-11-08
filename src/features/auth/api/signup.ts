import { ApiClient, getCsrfToken } from "@/shared/api";

interface SignupDTO {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  token: string;
}

export default async function signup(data: SignupDTO) {
  await getCsrfToken();

  return ApiClient.POST<SignupResponse>("/auth/register", data);
}
