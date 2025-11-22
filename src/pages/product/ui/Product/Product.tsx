import { StarIcon } from "@phosphor-icons/react/dist/ssr/Star";

import { ProductCarousel } from "../ProductCarousel";
import styles from "./Product.module.css";
import { ShareButtons } from "../ShareButtons";
import clsx from "clsx";
import { ProductOrderControls } from "../ProductOrderControls";
import { ProductSelectionProvider } from "../../model/product-selection-context";
import { getProduct, Product } from "@/entities/product";
import { notFound } from "next/navigation";

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
        {/*<div className="col-md-12 mx-auto">*/}
        <div className="col-md-12 col-xxl-10 mx-auto">
          <div className="pb-80">
            <div className="row row-gap-4">
              <div className="col-md-6">
                <ProductCarousel />
              </div>

              <div className="col-md-6 ">
                <div className={clsx(styles.productInfo, "mb-16")}>
                  <h4>{product.name}</h4>

                  <div className={styles.rating}>
                    <StarIcon weight="fill" />
                    <StarIcon weight="fill" />
                    <StarIcon weight="fill" />
                    <StarIcon weight="fill" />
                    <StarIcon weight="fill" />
                  </div>

                  <div
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
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
        </div>
      </div>
    </section>
  );
}
