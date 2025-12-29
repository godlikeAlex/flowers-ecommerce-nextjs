import { getProduct } from "@/entities/product";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const productSlug = (await params).slug;

  let productTitle = "BLUEMELLE Flower Boutique";
  let productDescription =
    "Shop quality flowers at BLUEMELLE Flower Boutique. Fast delivery and excellent service.";
  let ogTitle = productTitle;
  let ogDescription = productDescription;
  const ogImage = "/images/og-image.jpg";

  try {
    const {
      data: { seo, product },
    } = await getProduct(productSlug);

    if (seo.title) {
      productTitle = seo.title;
    } else {
      productTitle = `${product.name} - BLUEMELLE Flower Boutique`;
    }

    if (seo.description) {
      productDescription = seo.description;
    } else {
      productDescription = `${product.name}. Shop quality products at BLUEMELLE Flower Boutique. Fast delivery and excellent service.`;
    }

    if (seo.og_title) {
      ogTitle = seo.og_title;
    } else ogTitle = productTitle;

    if (seo.og_description) {
      ogDescription = seo.og_description;
    } else ogDescription = productDescription;
  } catch (error) {
    console.error("Error fetching product metadata:", error);
  }

  return {
    title: productTitle,
    description: productDescription,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: "website",
      siteName: "BLUEMELLE Flower Boutique",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
  };
}
