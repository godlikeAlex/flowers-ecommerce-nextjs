import { isAxiosError } from "axios";
import { notFound } from "next/navigation";

import { getCategory } from "@/entities/category";
import type { CategoryFacet } from "@/entities/category/models/types";
import { CategoryNavigation } from "@/entities/category/ui";
import { PageBanner, Sidebar } from "@/shared/ui";

export default async function Shop({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  let categories: CategoryFacet[] = [];

  try {
    const { data } = await getCategory(slug.join("/"));

    categories = data.facets.categories;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      if (e.response?.status === 404) notFound();
    }

    throw new Error("Server error");
  }

  return (
    <>
      <PageBanner title="Shop page" />

      <div className="py-80">
        <div className="container-fluid">
          <div className="row row-gap-5">
            <div className="col-xxl-3 col-lg-4">
              <Sidebar>
                <Sidebar.Section title="Categories">
                  <CategoryNavigation
                    categories={categories}
                    initialHistory={slug}
                  />
                </Sidebar.Section>

                <Sidebar.Section title="Price Range">
                  <h3>Price Range</h3>
                </Sidebar.Section>
              </Sidebar>
            </div>
            <div className="col-xxl-9 col-lg-8">{/* CONTENT */}</div>
          </div>
        </div>
      </div>
    </>
  );
}
