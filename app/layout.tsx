import type { Metadata } from "next";

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
    <html>
      <body>{children}</body>
    </html>
  );
}
