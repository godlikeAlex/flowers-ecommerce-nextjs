"use client";

import { ArticleCard } from "@/entities/article/ui";
import { Button, Carousel } from "@/shared/ui";

import styles from "./BlogSection.module.css";

import { SliderNavigation } from "../SliderNavigation";

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

      <div style={{ position: "relative" }}>
        <Carousel options={{ align: "start" }}>
          <SliderNavigation />

          <Carousel.Content>
            <Carousel.ContainerSlides>
              <Carousel.Item className={styles.slide}>
                <ArticleCard />
              </Carousel.Item>

              <Carousel.Item className={styles.slide}>
                <ArticleCard />
              </Carousel.Item>

              <Carousel.Item className={styles.slide}>
                <ArticleCard />
              </Carousel.Item>

              <Carousel.Item className={styles.slide}>
                <ArticleCard />
              </Carousel.Item>
            </Carousel.ContainerSlides>
          </Carousel.Content>
        </Carousel>
      </div>
    </div>
  );
}
