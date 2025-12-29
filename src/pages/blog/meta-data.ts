import { getCategoryPosts } from "@/entities/post";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  let title = "Blog - BLUEMELLE Flower Boutique";
  let description =
    "Read our latest articles about flowers, care tips, and floral design trends at BLUEMELLE Flower Boutique.";

  let ogTitle = title;
  let ogDescription = description;
  const ogImage = "/images/og-image.jpg";

  if (slug) {
    try {
      const {
        data: { seo, category },
      } = await getCategoryPosts({ categorySlug: slug, page: 1 });

      if (seo.title) {
        title = seo.title;
      } else {
        title = `${category.name} - BLUEMELLE Flower Boutique`;
      }

      if (seo.description) {
        description = seo.description;
      } else {
        description = `${category.name}. Read articles and tips at BLUEMELLE Flower Boutique blog.`;
      }

      if (seo.og_title) {
        ogTitle = seo.og_title;
      } else ogTitle = title;

      if (seo.og_description) {
        ogDescription = seo.og_description;
      } else ogDescription = description;
    } catch (error) {
      console.error("Error fetching product metadata:", error);
    }
  }

  return {
    title,
    description,
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
