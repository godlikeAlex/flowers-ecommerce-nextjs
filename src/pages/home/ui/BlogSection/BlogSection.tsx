"use client";

import { ArticleCard } from "@/entities/post/ui";
import { Button, Carousel } from "@/shared/ui";

import styles from "./BlogSection.module.css";

import { SliderNavigation } from "../SliderNavigation";
import { PostCard } from "@/entities/post";

interface Props {
  posts: PostCard[];
}

export default function BlogSection({ posts }: Props) {
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

      <div style={{ position: "relative" }}>
        <Carousel options={{ align: "start" }}>
          <SliderNavigation />

          <Carousel.Content>
            <Carousel.ContainerSlides>
              {posts.map((postCard) => (
                <Carousel.Item className={styles.slide} key={postCard.id}>
                  <ArticleCard postCard={postCard} />
                </Carousel.Item>
              ))}
            </Carousel.ContainerSlides>
          </Carousel.Content>
        </Carousel>
      </div>
    </div>
  );
}
