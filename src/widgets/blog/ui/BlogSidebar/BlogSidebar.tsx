import { Sidebar } from "@/shared/ui";
import { CategoryItem } from "../CategoryItem";
import {
  getAllPostCategories,
  getRecentPosts,
  PostCard,
  PostCategory,
} from "@/entities/post";
import { Suspense } from "react";
import { RecentPosts } from "../RecentPosts";

export default async function BlogSidebar() {
  let categories: PostCategory[] = [];

  try {
    const { data } = await getAllPostCategories();

    categories = data;
  } catch (e) {
    console.log("Error while getting post categories", e);
  }

  return (
    <Sidebar>
      <Sidebar.Section title="Categories">
        {categories.map((category) => (
          <CategoryItem
            title={category.name}
            slug={category.slug}
            key={category.id}
          />
        ))}
      </Sidebar.Section>

      <Sidebar.Section title="Recent Posts">
        <Suspense fallback={<RecentPosts.Skeleton />}>
          <RecentPosts />
        </Suspense>
      </Sidebar.Section>
    </Sidebar>
  );
}
