import { ProductCarousel } from "../ProductCarousel";
import styles from "./Product.module.css";
import { ShareButtons } from "../ShareButtons";
import clsx from "clsx";
import { ProductOrderControls } from "../ProductOrderControls";
import { getProduct, Product } from "@/entities/product";
import { notFound } from "next/navigation";
import { ProductTabs } from "../ProductTabs";
import { ProductSelectionProvider } from "@/widgets/product";
import { ProductRating } from "../ProductRating";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const productSlug = (await params).slug;
  let product: Product;

  try {
    const { data } = await getProduct(productSlug);

    product = data.product;
  } catch {
    return notFound();
  }

  return (
    <section className="py-80">
      <div className="container-fluid">
        <div className="col-md-12 col-xxl-10 mx-auto">
          <div className="pb-80">
            <div className="row row-gap-4">
              <div className="col-md-6">
                <ProductCarousel slides={product.slider_assets} />
              </div>

              <div className="col-md-6 ">
                <div className={clsx(styles.productInfo, "mb-16")}>
                  <h4>{product.name}</h4>

                  <ProductRating
                    rating={product.rating}
                    totalReviews={product.total_reviews}
                  />

                  <div>{product.card_description}</div>
                </div>

                <ProductSelectionProvider selectedOption={product.options[0]}>
                  <ProductOrderControls
                    productAddons={product.addons}
                    productOptions={product.options}
                  />
                </ProductSelectionProvider>

                <hr className="dash-line mb-16" />

                <div className="d-flex justify-content-between align-items-center gap-2 mb-16">
                  <span className="bold-text accent-dark">Share</span>
                  <ShareButtons />
                </div>

                <hr className="dash-line mb-16" />
              </div>
            </div>
          </div>

          <div>
            <ProductTabs
              productID={product.id}
              description={product.description}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
