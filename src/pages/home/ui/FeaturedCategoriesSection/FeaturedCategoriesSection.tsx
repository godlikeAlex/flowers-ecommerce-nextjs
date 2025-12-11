import { CategoryMenu } from "@/entities/category";
import { CategoryCard } from "@/entities/category/ui";
import { ROUTES } from "@/shared/config";

interface Props {
  categories: CategoryMenu[];
}

export default function FeaturedCategoriesSection({ categories }: Props) {
  return (
    <div className="categories">
      <div className="container-fluid">
        <div className="row row-gap-4 justify-content-center">
          {categories.map((category) => (
            <div key={category.id} className="col-lg-4 col-sm-6">
              <CategoryCard
                image="/images/categories/category-01.png"
                name={category.name}
                href={ROUTES.SHOP([category.slug])}
                variant="pink"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
