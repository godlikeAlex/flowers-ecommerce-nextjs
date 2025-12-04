import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  images: {
    unoptimized: isDev,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "backend.flowers-site.test",
        port: "",
        pathname: "/storage/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "backend.bluemelle.com",
        port: "",
        pathname: "/storage/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
