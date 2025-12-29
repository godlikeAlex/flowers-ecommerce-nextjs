import { getPost, Post } from "@/entities/post";
import { Anchor, PageBanner } from "@/shared/ui";
import clsx from "clsx";
import Image from "next/image";
import { notFound } from "next/navigation";

import styles from "./PostPage.module.css";
import { BlogSidebar } from "@/widgets/blog";
import { PostPublishedDate } from "@/entities/post/ui";
import { ROUTES } from "@/shared/config";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const productSlug = (await params).slug;
  let post: Post;

  try {
    const { data } = await getPost(productSlug);

    post = data.post;
  } catch (e) {
    console.log("error", e);
    return notFound();
  }

  return (
    <>
      <PageBanner title={post.title} />

      <section className="py-80">
        <div className="container-fluid">
          <div className="row row-gap-5">
            <div className="col-md-8">
              <div className="blog-detail">
                <figure className={clsx(styles.image, "mb-24")}>
                  <Image
                    placeholder="blur"
                    blurDataURL={post.blur_preview}
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    style={{ objectFit: "cover" }}
                  />
                </figure>

                <div className="d-flex justify-content-between align-items-center gap-2 mb-24">
                  <Anchor
                    href={ROUTES.BLOG(post.category.slug)}
                    className="bold-text color-primary"
                  >
                    Category: {post.category.name}
                  </Anchor>

                  <PostPublishedDate published_at={post.published_at} />
                </div>

                <h3 className="mb-24">{post.title}</h3>

                <div
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className={styles.post}
                />
              </div>
            </div>

            <div className="col-md-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
