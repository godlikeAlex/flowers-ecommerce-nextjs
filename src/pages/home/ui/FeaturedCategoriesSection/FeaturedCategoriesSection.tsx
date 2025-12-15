import { CategoryMenu } from "@/entities/category";
import { CategoryCard } from "@/entities/category/ui";
import { CATEGORY_CARD_COLORS } from "@/entities/category/ui/CategoryCard/CategoryCard";
import { ROUTES } from "@/shared/config";

interface Props {
  categories: CategoryMenu[];
}

export default function FeaturedCategoriesSection({ categories }: Props) {
  return (
    <div className="categories">
      <div className="container-fluid">
        <div className="row row-gap-4 justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <CategoryCard
              name={"All Products"}
              href={ROUTES.SHOP([])}
              variant="primaryBlue"
            />
          </div>

          {categories.map((category, index) => (
            <div key={category.id} className="col-lg-4 col-sm-6">
              <CategoryCard
                image={category.cover}
                name={category.name}
                href={ROUTES.SHOP([category.slug])}
                variant={CATEGORY_CARD_COLORS[index]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
