import { getPost, Post } from "@/entities/post";
import { PageBanner, Sidebar } from "@/shared/ui";
import clsx from "clsx";
import Image from "next/image";
import { notFound } from "next/navigation";

import styles from "./PostPage.module.css";
import { CategoryItem } from "../CategoryItem";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const productSlug = (await params).slug;
  let post: Post;

  try {
    const { data } = await getPost(productSlug);

    post = data;
  } catch (e) {
    console.log("error", e);
    return notFound();
  }

  return (
    <>
      <PageBanner title="Post Page" />

      <section className="py-80">
        <div className="container-fluid">
          <div className="row row-gap-5">
            <div className="col-md-8">
              <div className="blog-detail">
                <figure className={clsx(styles.image, "mb-24s")}>
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

                <h3 className="mb-24">{post.title}</h3>

                <div
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className={styles.post}
                />
              </div>
            </div>

            <div className="col-md-4">
              <Sidebar>
                <Sidebar.Section title="Categories">
                  <CategoryItem title="News" />
                  <CategoryItem title="Holidays & Events" />
                  <CategoryItem title="Deals & Discounts" />
                  <CategoryItem title="Gift Ideas" />
                </Sidebar.Section>
              </Sidebar>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
