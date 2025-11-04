import localFont from "next/font/local";
import type { Metadata } from "next";

import "@/app/global.css";
import Providers from "@/app/Providers";

const bluemelleFont = localFont({
  src: [
    {
      path: "../public/fonts/bluemelle-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/bluemelle-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/bluemelle-black.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "BLUEMELLE Flower Boutique — Fresh Blooms, Modern Design",
  description:
    "At BLUEMELLE, we create stylish, contemporary bouquets that speak your emotions. Fresh flowers, custom arrangements, and thoughtful floral gifts for every moment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bluemelleFont.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
