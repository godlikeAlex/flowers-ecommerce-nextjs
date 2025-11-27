import axios, { CreateAxiosDefaults } from "axios";
import Cookies from "js-cookie";

export function createAxiosBrowserInstance(config?: CreateAxiosDefaults) {
  const instance = axios.create({
    ...config,
    headers: {
      ...config?.headers,
    },
  });

  instance.interceptors.response.use((response) => {
    const incomingCartToken = response.data?.cart_token;

    if (incomingCartToken) {
      Cookies.set("cart_token", incomingCartToken, {
        expires: 30,
        sameSite: "Lax",
      });
    }

    return response;
  });

  instance.interceptors.request.use((config) => {
    const cartToken = Cookies.get("cart_token");

    if (cartToken) {
      config.headers["X-Cart-Token"] = cartToken;
    }

    return config;
  });

  return instance;
}
