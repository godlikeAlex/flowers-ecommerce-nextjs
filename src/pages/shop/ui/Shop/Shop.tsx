import { isAxiosError } from "axios";
import { notFound } from "next/navigation";
import clsx from "clsx";

import { getCategory, PriceRange } from "@/entities/category";
import type { CategoryFacet } from "@/entities/category/models/types";
import { PageBanner, Pagination } from "@/shared/ui";
import type { ProductCard as IProductCard } from "@/entities/product";
import { ProductCard } from "@/widgets/product/ui";
import { PaginationResponse } from "@/shared/lib/utility-types";
import { catalogFiltersSchema } from "../../model/catalog-filters-schema";
import { buildFilterQueryString } from "../../lib/filter-helpers";
import { EmptyStateProducts } from "../EmptyStateProducts";
import { Filters } from "../Filters";
import { SortSelect } from "../SortSelect";

import styles from "./Shop.module.css";

export default async function Shop({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
}) {
  const { slug } = await params;
  const catalogFilters = catalogFiltersSchema.parse(await searchParams);

  let products: PaginationResponse<IProductCard>;
  let categories: CategoryFacet[] = [];
  let priceRange: PriceRange = { min_price: 0, max_price: 0 };

  try {
    const { data } = await getCategory(
      slug ? slug.join("/") : "",
      buildFilterQueryString(catalogFilters),
    );

    products = data.products;
    categories = data.facets.categories;
    priceRange = data.facets.price_range;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      if (e.response?.status === 404) notFound();
    }

    throw new Error("Server error");
  }

  return (
    <>
      <PageBanner title="Shop" />
      <div className="py-80">
        <div className="container-fluid">
          <div className="row row-gap-5">
            <div className="col-xxl-3 col-lg-4">
              <Filters
                categories={categories}
                priceRange={priceRange}
                currentPath={slug}
              />
            </div>
            <div className="col-xxl-9 col-lg-8">
              {products.data.length > 0 ? (
                <>
                  <div className={clsx(styles["filter-row-2"], "mb-24")}>
                    <div className={styles.listing}>
                      <p className="accent-dark">
                        Showing {products.meta.from} - {products.meta.to} of{" "}
                        {products.meta.total} Results
                      </p>
                      <div className="d-flex gap-3">
                        <a href="shop-list.html" className="list-icon">
                          <i className="fa-light fa-list-ul"></i>
                        </a>
                        <a href="shop-grid.html" className="list-icon">
                          <i className="fa-light fa-grid-2"></i>
                        </a>
                      </div>
                    </div>
                    <div className={styles.filters}>
                      <div className={styles["form-group"]}>
                        <SortSelect />
                      </div>
                    </div>
                  </div>
                  <div className="row row-gap-4">
                    {products.data.map((product) => (
                      <div className="col-md-4" key={product.id}>
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>

                  <Pagination
                    currentPage={products.meta.current_page}
                    pageCount={products.meta.last_page}
                  />
                </>
              ) : (
                <EmptyStateProducts />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
