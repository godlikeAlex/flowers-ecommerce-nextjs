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
import { getMenuCategories } from "@/entities/category";
import { FeaturedSection } from "@/entities/featured-section";

export default async function Home() {
  const categories = await getMenuCategories();
  let posts: PostCard[] = [];
  let featuredSections: FeaturedSection[] = [];

  try {
    const { data } = await getHomePageData();

    posts = data.latest_posts;
    featuredSections = data.featured_section;
  } catch (e) {
    console.log("Error while loading data", e);
  }

  return (
    <>
      <HeroSection />
      <HomeSection>
        <AdvantagesSection />

        <div className="mt-48">
          <FeaturedCategoriesSection categories={categories} />
        </div>
      </HomeSection>

      <section style={{ paddingBottom: 80 }}>
        <AboutSection />
      </section>

      {featuredSections.map((section, index) => (
        <section key={index} style={{ paddingBottom: 80 }}>
          <FeaturedCategoryShowcase
            title={section.title}
            products={section.products}
            buttonText={section.button_text}
            buttonLink={section.button_link}
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
