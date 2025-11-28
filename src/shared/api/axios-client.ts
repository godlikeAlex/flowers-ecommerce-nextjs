import { createAxiosServerInstance } from "./axios-client.server";
import { createAxiosBrowserInstance } from "./axios-client.browser";

const axiosConfig = {
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export async function createAxiosInstance() {
  if (typeof window === "undefined") {
    return createAxiosServerInstance(axiosConfig);
  }

  return createAxiosBrowserInstance(axiosConfig);
}
