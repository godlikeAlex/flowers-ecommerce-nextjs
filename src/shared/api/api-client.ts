import { AxiosRequestConfig } from "axios";
import { createAxiosInstance } from "./axios-client";

export default class ApiClient {
  static async GET<T>(url: string, config?: AxiosRequestConfig) {
    const client = await this.retrieveClient();

    return client.get<T>(url, config);
  }

  static async POST<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ) {
    const client = await this.retrieveClient();

    return client.post<T>(url, data, config);
  }

  private static async retrieveClient() {
    return await createAxiosInstance();
  }
}
