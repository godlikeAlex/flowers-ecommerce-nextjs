import {
  getAllPosts,
  getCategoryPosts,
  PostCard as IPostCard,
} from "@/entities/post";
import { ArticleCard } from "@/entities/post/ui";
import { PaginationResponse } from "@/shared/lib/utility-types";
import { PageBanner, Pagination } from "@/shared/ui";
import { BlogSidebar } from "@/widgets/blog";
import { isAxiosError } from "axios";
import { notFound } from "next/navigation";
import { EmptyStatePosts } from "../EmptyStatePosts";
import { pageQeuryParamsSchema } from "../../model/page-query-params-schema";

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug?: string }>;
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const page = pageQeuryParamsSchema.parse((await searchParams).page);
  const { slug } = await params;

  let bannerTitle = "Blog";
  let posts: PaginationResponse<IPostCard>;

  try {
    if (!slug) {
      const response = await getAllPosts(page);

      posts = response.data;
    } else {
      const response = await getCategoryPosts({
        categorySlug: slug,
        page,
      });

      bannerTitle = response.data.category.name;
      posts = response.data.posts;
    }
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      if (e.response?.status === 404) notFound();
    }

    throw new Error("Server error");
  }

  return (
    <>
      <PageBanner title={bannerTitle} />

      <section className="py-80">
        <div className="container-fluid">
          <div className="row row-gap-5">
            <div className="col-lg-8 order-lg-1 order-2">
              {posts.data.length > 0 ? (
                <>
                  <div className="row row-gap-4">
                    {posts.data.map((postCard) => (
                      <div className="col-md-6" key={postCard.id}>
                        <ArticleCard postCard={postCard} />
                      </div>
                    ))}
                  </div>

                  <Pagination
                    currentPage={posts.meta.current_page}
                    pageCount={posts.meta.last_page}
                  />
                </>
              ) : (
                <EmptyStatePosts />
              )}
            </div>

            <div className="col-lg-4 order-lg-2 order-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
