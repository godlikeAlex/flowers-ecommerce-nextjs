import type { Metadata } from "next";

import Providers from "@/app/Providers";
import { bluemelleFont } from "@/app/bluemelleFont";

import "@/app/bootstrap.scss";
import "@/app/global.css";

import Header from "./Header";

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
        <main className="x-hidden">
          <Header />

          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
