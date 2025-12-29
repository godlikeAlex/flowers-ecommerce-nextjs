import { getCategory } from "@/entities/category";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;

  let catalogTitle = "Shop All - BLUEMELLE Flower Boutique";
  let catalogDescription = `Browse our collection of quality flowers at BLUEMELLE Flower Boutique. Fast delivery and excellent service.`;

  let ogTitle = catalogTitle;
  let ogDescription = catalogDescription;
  const ogImage = "/images/og-image.jpg";

  try {
    const {
      data: { target_category },
    } = await getCategory(slug ? slug.join("/") : "");

    const { category, seo } = target_category;

    if (seo.title) {
      catalogTitle = seo.title;
    } else {
      if (category) {
        catalogTitle = `${category.name} - BLUEMELLE Flower Boutique`;
      }
    }

    if (seo.description) {
      catalogDescription = seo.description;
    } else {
      if (category) {
        catalogDescription = `${category.name}. Browse our collection at BLUEMELLE Flower Boutique. Fast delivery and excellent service.`;
      }
    }

    if (seo.og_title) {
      ogTitle = seo.og_title;
    } else ogTitle = catalogTitle;

    if (seo.og_description) {
      ogDescription = seo.og_description;
    } else ogDescription = catalogDescription;
  } catch (error) {
    console.error("Error fetching product metadata:", error);
  }

  return {
    title: catalogTitle,
    description: catalogDescription,
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
