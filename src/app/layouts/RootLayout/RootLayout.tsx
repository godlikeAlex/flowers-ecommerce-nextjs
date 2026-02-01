import type { Metadata } from "next";

import Providers from "@/app/Providers";
import { bluemelleFont } from "@/app/bluemelleFont";

import { Pacifico } from "next/font/google";

const pacificoFont = Pacifico({
  display: "swap",
  weight: "400",
  variable: "--promo-font",
});

import "@/app/bootstrap.scss";
import "@/app/global.css";

import Header from "./Header";
import { Footer, WhatsAppWidget, AnnouncementWidget } from "@/shared/ui";
import { getMenuCategories } from "@/entities/category";
import NextTopLoader from "nextjs-toploader";

import "react-loading-skeleton/dist/skeleton.css";
import { ScrollToTop } from "./ScrollToTop";
import { SlideOverCart } from "@/widgets/cart/ui";

export const metadata: Metadata = {
  metadataBase: new URL("https://bluemelle.com"),
  title: "BLUEMELLE Flower Boutique — Fresh Blooms, Modern Design",
  description:
    "At BLUEMELLE, we create stylish, contemporary bouquets that speak your emotions. Fresh flowers, custom arrangements, and thoughtful floral gifts for every moment.",
  openGraph: {
    title: "BLUEMELLE Flower Boutique — Fresh Blooms, Modern Design",
    description:
      "At BLUEMELLE, we create stylish, contemporary bouquets that speak your emotions. Fresh flowers, custom arrangements, and thoughtful floral gifts for every moment.",
    type: "website",
    siteName: "BLUEMELLE Flower Boutique",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BLUEMELLE Flower Boutique",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getMenuCategories();

  return (
    <html lang="en" className={bluemelleFont.className}>
      <body style={bluemelleFont.style} className={pacificoFont.variable}>
        <ScrollToTop />
        <main className="main">
          <Providers>
            <NextTopLoader color="#0b5bb2" />
            <SlideOverCart />

            <Header categories={categories} />
            <WhatsAppWidget />
            <AnnouncementWidget />
            {children}
            <Footer categories={categories} />
          </Providers>
        </main>
      </body>
    </html>
  );
}
