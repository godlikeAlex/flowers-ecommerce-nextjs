import { Florist, WithContext } from "schema-dts";

import { HeroSection } from "../HeroSection";
import { AdvantagesSection } from "../AdvantagesSection";
import { FeaturedCategoriesSection } from "../FeaturedCategoriesSection";
import { AboutSection } from "../AboutSection";
import { FeaturedCategoryShowcase } from "../FeaturedCategoryShowcase";
import { OfferBanner } from "../OfferBanner";

import { BlogSection } from "../BlogSection";
import { HomeSection } from "../HomeSection";
import { getHomePageData } from "../../api/get-home-page-data";
import { PostCard } from "@/entities/post";
import { getMenuCategories } from "@/entities/category";
import { FeaturedSection } from "@/entities/featured-section";
import { GoogleReview } from "../GoogleReview";
import { VideoSection } from "../VideoSection";
import { InstagramReview } from "../InstagramReview";

export default async function Home() {
  const categories = await getMenuCategories();
  let posts: PostCard[] = [];
  let featuredSections: FeaturedSection[] = [];

  const jsonLd: WithContext<Florist> = {
    "@context": "https://schema.org",
    "@type": "Florist",
    name: "Bluemelle",
    url: "https://www.bluemelle.com",
    telephone: "+1-848-345-0492",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "1212 NJ-34 suite 25, Aberdeen Township, NJ 07747, United States",
      addressLocality: "Aberdeen",
      addressRegion: "NJ",
      postalCode: "07747",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Aberdeen Township, NJ",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    sameAs: ["https://maps.app.goo.gl/dZpye1JMjVtpY6fj8"],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Same-Day Flower Delivery",
        },
      },
    ],
  };

  try {
    const { data } = await getHomePageData();

    posts = data.latest_posts;
    featuredSections = data.featured_section;
  } catch (e) {
    console.log("Error while loading data", e);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

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
        <VideoSection />
      </section>

      <section style={{ paddingBottom: 80 }}>
        <GoogleReview />
      </section>

      <section style={{ paddingBottom: 80 }}>
        <BlogSection posts={posts} />
      </section>

      <section style={{ paddingBottom: 80 }}>
        <InstagramReview />
      </section>
    </>
  );
}
