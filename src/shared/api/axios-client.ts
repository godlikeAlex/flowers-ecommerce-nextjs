import axios from "axios";
import { createAxiosServerInstance } from "./axios-client.server";

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

  return axios.create(axiosConfig);
}
