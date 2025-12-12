import type { Metadata } from "next";

import Providers from "@/app/Providers";
import { bluemelleFont } from "@/app/bluemelleFont";

import "@/app/bootstrap.scss";
import "@/app/global.css";

import Header from "./Header";
import { Footer } from "@/shared/ui";
import { getMenuCategories } from "@/entities/category";
import NextTopLoader from "nextjs-toploader";

import "react-loading-skeleton/dist/skeleton.css";
import { ScrollToTop } from "./ScrollToTop";
import { SlideOverCart } from "@/widgets/cart/ui";

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
  const categories = await getMenuCategories();

  return (
    <html lang="en" className={bluemelleFont.className}>
      <body style={bluemelleFont.style}>
        <ScrollToTop />
        <main className="main">
          <Providers>
            <NextTopLoader color="#0b5bb2" />
            <SlideOverCart />

            <Header categories={categories} />
            {children}
            <Footer categories={categories} />
          </Providers>
        </main>
      </body>
    </html>
  );
}
