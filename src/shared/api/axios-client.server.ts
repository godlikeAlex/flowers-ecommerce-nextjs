"use server";

import { cookies } from "next/headers";
import axios, { CreateAxiosDefaults } from "axios";

export async function createAxiosServerInstance(config?: CreateAxiosDefaults) {
  const apiToken = (await cookies()).get("apiToken")?.value;

  return axios.create({
    ...config,
    headers: {
      ...config?.headers,
      Authorization: apiToken ? `Bearer ${apiToken}` : undefined,
    },
  });
}
