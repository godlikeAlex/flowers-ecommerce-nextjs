import type { Metadata } from "next";

import Providers from "@/app/Providers";
import { bluemelleFont } from "@/app/bluemelleFont";

import "@/app/bootstrap.scss";
import "@/app/global.css";

import Header from "./Header";
import { Footer } from "@/shared/ui";
import { CategoryMenu, getMenuCategories } from "@/entities/category";
import NextTopLoader from "nextjs-toploader";

import "react-loading-skeleton/dist/skeleton.css";

export const metadata: Metadata = {
  title: "BLUEMELLE Flower Boutique — Fresh Blooms, Modern Design",
  description:
    "At BLUEMELLE, we create stylish, contemporary bouquets that speak your emotions. Fresh flowers, custom arrangements, and thoughtful floral gifts for every moment.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let categories: CategoryMenu[] = [];

  try {
    const response = await getMenuCategories();

    categories = response?.data || [];
  } catch (e) {
    console.error("Error while fetching menu:", e);
  }

  return (
    <html lang="en" className={bluemelleFont.className}>
      <body style={bluemelleFont.style}>
        <main className="main">
          <Providers>
            <NextTopLoader color="#0b5bb2" />

            <Header categories={categories} />
            {children}
            <Footer categories={categories} />
          </Providers>
        </main>
      </body>
    </html>
  );
}
