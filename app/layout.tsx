import type { Metadata } from "next";

import "@/app/global.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
