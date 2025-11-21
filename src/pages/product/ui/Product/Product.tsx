import { ProductCarousel } from "../ProductCarousel";

export default function Product() {
  return (
    <section className="py-80">
      <div className="container-fluid">
        {/*<div className="col-md-12 mx-auto">*/}
        <div className="col-md-12 col-lg-11 col-xxl-9 mx-auto">
          <div className="pb-80">
            <div className="row row-gap-4">
              <div className="col-md-6">
                <ProductCarousel />
              </div>

              <div className="col-md-6">
                <h2>Product name</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
