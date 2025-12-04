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
