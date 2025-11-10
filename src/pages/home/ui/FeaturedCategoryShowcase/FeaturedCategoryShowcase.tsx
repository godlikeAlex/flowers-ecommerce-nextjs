import { ProductCard } from "@/widgets/product/ui";

interface Props {
  title: string;
  products: {
    title: string;
    price: number;
    description: string;
    image: string;
  }[];
}

export default function FeaturedCategoryShowcase({ title, products }: Props) {
  return (
    <section className="py-80">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between mb-48">
          <div className="heading">
            <h2>{title}</h2>
          </div>
        </div>

        <div className="row">
          {products.map((product) => (
            <div className="col-md-3" key={product.title}>
              <ProductCard
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
