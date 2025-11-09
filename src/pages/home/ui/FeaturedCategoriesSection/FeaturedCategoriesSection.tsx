import { CategoryCard } from "@/entities/category/ui";

const CATEGORIES: {
  name: string;
  href: string;
  image: string;
  variant: "pink" | "yellow" | "beige";
}[] = [
  {
    name: "Rose Varieties",
    href: "#",
    image: "/images/categories/category-01.png",
    variant: "pink",
  },
  {
    name: "Rose Varieties",
    href: "#",
    image: "/images/categories/category-02.png",
    variant: "beige",
  },
  {
    name: "Rose Varieties",
    href: "#",
    image: "/images/categories/category-03.png",
    variant: "yellow",
  },
  {
    name: "Rose Varieties",
    href: "#",
    image: "/images/categories/category-04.png",
    variant: "pink",
  },
];

export default function FeaturedCategoriesSection() {
  return (
    <section className="categories py-80">
      <div className="container-fluid">
        <div className="row row-gap-4 justify-content-center">
          {CATEGORIES.map((category, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
