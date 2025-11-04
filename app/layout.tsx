import localFont from "next/font/local";
import type { Metadata } from "next";

import "@/app/global.css";

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
  title: "BLUEMELLE - Flower boutique",
  description: "Flower boutique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bluemelleFont.className}>
      <body>{children}</body>
    </html>
  );
}
