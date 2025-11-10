import { ArticleCard } from "@/entities/article/ui";
import { Button } from "@/shared/ui";

export default function BlogSection() {
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between mb-48">
        <div className="heading">
          <h2>
            Our Latest <span>Articles</span>
          </h2>
        </div>
        <Button>View All</Button>
      </div>

      <div className="row">
        <div className="col-md-4">
          <ArticleCard />
        </div>
        <div className="col-md-4">
          <ArticleCard />
        </div>
        <div className="col-md-4">
          <ArticleCard />
        </div>
      </div>
    </div>
  );
}
