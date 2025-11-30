import { HeroSection } from "../HeroSection";
import { AdvantagesSection } from "../AdvantagesSection";
import { FeaturedCategoriesSection } from "../FeaturedCategoriesSection";
import { AboutSection } from "../AboutSection";
import { FeaturedCategoryShowcase } from "../FeaturedCategoryShowcase";
import { OfferBanner } from "../OfferBanner";
import { ReviewsSection } from "../ReviewsSection";
import { BlogSection } from "../BlogSection";
import { HomeSection } from "../HomeSection";
import { getHomePageData } from "../../api/get-home-page-data";
import { PostCard } from "@/entities/post";
import { ProductCard } from "@/entities/product";

const CATEGORY_SHOW_CASES = [
  {
    categoryName: "Spring Bouquets",
    products: [
      {
        title: "Morning Freshness Bouquet",
        price: 3599,
        description:
          "A light spring bouquet of tulips and delicate roses that fills your home with a scent of freshness and warmth.",
        image: "/images/product/p-1.png",
      },
      {
        title: "Sunny Day Arrangement",
        price: 4299,
        description:
          "A cheerful mix of yellow daffodils and chrysanthemums that brings joy and brightens any space.",
        image: "/images/product/p-2.png",
      },
      {
        title: "Pink Dawn Bouquet",
        price: 3899,
        description:
          "An elegant blend of peonies and roses in soft pink tones, perfect for those who appreciate subtle beauty.",
        image: "/images/product/p-3.png",
      },
      {
        title: "Lavender Dreams",
        price: 3999,
        description:
          "A fragrant bouquet featuring lavender and wildflowers, creating an atmosphere of calm and relaxation.",
        image: "/images/product/p-4.png",
      },
    ],
  },
  {
    categoryName: "Indoor Plants",
    products: [
      {
        title: "Phalaenopsis Orchid",
        price: 5299,
        description:
          "A luxurious orchid with large blooms that can flower for up to three months, adding elegance to any interior.",
        image: "/images/product/p-2.png",
      },
      {
        title: "Echeveria Succulent",
        price: 1799,
        description:
          "A small, easy-to-care-for plant with thick leaves that stores water and helps purify indoor air.",
        image: "/images/product/p-1.png",
      },
      {
        title: "Ficus Benjamina",
        price: 4499,
        description:
          "A classic indoor plant with lush green foliage, bringing a sense of freshness and coziness to your home.",
        image: "/images/product/p-3.png",
      },
      {
        title: "Peace Lily (Spathiphyllum)",
        price: 3899,
        description:
          "An elegant plant with white blooms symbolizing harmony and tranquility in your living space.",
        image: "/images/product/p-4.png",
      },
    ],
  },
  {
    categoryName: "Nature’s Scents",
    products: [
      {
        title: "Blooming Garden Diffuser",
        price: 2599,
        description:
          "A natural reed diffuser with jasmine and rose notes, recreating the gentle fragrance of a spring garden.",
        image: "/images/product/p-1.png",
      },
      {
        title: "Lavender & Vanilla Candle",
        price: 2199,
        description:
          "A hand-poured candle made from natural wax, blending soothing lavender with the sweetness of vanilla.",
        image: "/images/product/p-2.png",
      },
      {
        title: "Citrus Sunrise Oil",
        price: 1799,
        description:
          "An essential oil blend of orange and lemon, designed to energize your mornings and lift your mood.",
        image: "/images/product/p-3.png",
      },
      {
        title: "Ocean Breeze Diffuser",
        price: 2699,
        description:
          "A fresh, airy scent with marine and ozone notes that evoke a feeling of freedom and open space.",
        image: "/images/product/p-4.png",
      },
    ],
  },
];

export default async function Home() {
  let posts: PostCard[] = [];
  let featuredCategories: { name: string; products: ProductCard[] }[] = [];

  try {
    const { data } = await getHomePageData();

    posts = data.latest_posts;
    featuredCategories = data.categories;
  } catch (e) {
    console.log("Error while loading data", e);
  }

  return (
    <>
      <HeroSection />
      <HomeSection>
        <AdvantagesSection />

        <div className="mt-48">
          <FeaturedCategoriesSection />
        </div>
      </HomeSection>

      <section style={{ paddingBottom: 80 }}>
        <AboutSection />
      </section>

      {featuredCategories.map((category, index) => (
        <section key={index} style={{ paddingBottom: 80 }}>
          <FeaturedCategoryShowcase
            title={category.name}
            products={category.products}
          />
        </section>
      ))}

      <section style={{ paddingBottom: 80 }}>
        <AdvantagesSection />
        <OfferBanner />
      </section>
      <section style={{ paddingBottom: 80 }}>
        <ReviewsSection />
      </section>
      <section style={{ paddingBottom: 80 }}>
        <BlogSection posts={posts} />
      </section>
    </>
  );
}
