"use client";

import clsx from "clsx";
import Image from "next/image";

import { StarIcon } from "@phosphor-icons/react/dist/ssr/Star";

import styles from "./ReviewSection.module.css";
import { Carousel } from "@/shared/ui";
import { SliderNavigation } from "../SliderNavigation";

export default function ReviewsSection() {
  return (
    <div className="container-fluid">
      <div className="heading text-center mb-48">
        <h2>
          Words from <span className="color-primary">Our Clients</span>
        </h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-11 col-md-8 col-sm-10">
          <div style={{ position: "relative" }}>
            <Carousel options={{ align: "start" }}>
              <SliderNavigation center />

              <Carousel.Content>
                <Carousel.ContainerSlides>
                  <Carousel.Item className={styles.slide}>
                    <div className={styles["testimonial-card"]}>
                      <div className={styles["img-block"]}>
                        <Image
                          width={240}
                          height={240}
                          src="/images/testimonials/t-2.png"
                          alt=""
                        />
                        <div className={styles["quote-icon"]}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 22"
                            fill="none"
                          >
                            <path
                              d="M22.4552 0.33317C23.6786 0.33317 24.7491 0.562561 25.6666 1.02134C26.5842 1.5311 27.3234 2.19378 27.8841 3.00939C28.3938 3.825 28.8016 4.79354 29.1075 5.91501C29.4134 7.03648 29.5663 8.20892 29.5663 9.43233C29.5663 11.9301 28.9291 14.275 27.6547 16.467C26.3293 18.6589 24.2903 20.3921 21.5376 21.6665L20.8494 20.2902C22.2768 19.6275 23.5512 18.6589 24.6726 17.3845C25.7431 16.1611 26.3803 14.8612 26.5842 13.4849C26.8901 12.4144 26.9155 11.3694 26.6607 10.3499C25.5392 11.5733 24.0354 12.185 22.1493 12.185C20.4161 12.185 18.9888 11.6498 17.8674 10.5793C16.7459 9.55977 16.1852 8.13245 16.1852 6.29733C16.1852 4.51318 16.7714 3.06037 17.9438 1.93891C19.1163 0.868416 20.62 0.33317 22.4552 0.33317ZM6.70368 0.33317C7.9271 0.33317 8.99759 0.562561 9.91515 1.02134C10.8327 1.5311 11.5719 2.19378 12.1326 3.00939C12.6424 3.825 13.0502 4.79354 13.356 5.91501C13.6619 7.03648 13.8148 8.20892 13.8148 9.43233C13.8148 11.9301 13.1776 14.275 11.9032 16.467C10.5778 18.6589 8.53881 20.3921 5.78612 21.6665L5.09795 20.2902C6.52527 19.6275 7.79966 18.6589 8.92113 17.3845C9.99162 16.1611 10.6288 14.8612 10.8327 13.4849C11.1386 12.4144 11.1641 11.3694 10.9092 10.3499C9.78771 11.5733 8.28393 12.185 6.39783 12.185C4.66466 12.185 3.23734 11.6498 2.11587 10.5793C0.994406 9.55977 0.433672 8.13245 0.433672 6.29733C0.433672 4.51318 1.01989 3.06037 2.19234 1.93891C3.36478 0.868416 4.86856 0.33317 6.70368 0.33317Z"
                              fill="#BE70A7"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className={styles["text-block"]}>
                        <div className={clsx(styles.stars, "mb-8")}>
                          <StarIcon weight="fill" />
                          <StarIcon weight="fill" />
                          <StarIcon weight="fill" />
                          <StarIcon weight="fill" />
                          <StarIcon weight="fill" />
                        </div>
                        <div className={clsx(styles.info, "mb-16")}>
                          <span className="h6 color-primary">Ethan Clarke</span>
                          <span className="h6">Customer</span>
                        </div>
                        <p>
                          “Lorem ipsum dolor sit amet consectetur. Volutpat
                          egestas non posuere faucibus. Diam consequat eros
                          convallis enim consequat arcu vitae. Est porta netus
                          sit tellus non eget purus.”
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item className={styles.slide}>
                    <div className={styles["testimonial-card"]}>
                      <div className={styles["img-block"]}>
                        <Image
                          width={240}
                          height={240}
                          src="/images/testimonials/t-2.png"
                          alt=""
                        />
                        <div className={styles["quote-icon"]}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 22"
                            fill="none"
                          >
                            <path
                              d="M22.4552 0.33317C23.6786 0.33317 24.7491 0.562561 25.6666 1.02134C26.5842 1.5311 27.3234 2.19378 27.8841 3.00939C28.3938 3.825 28.8016 4.79354 29.1075 5.91501C29.4134 7.03648 29.5663 8.20892 29.5663 9.43233C29.5663 11.9301 28.9291 14.275 27.6547 16.467C26.3293 18.6589 24.2903 20.3921 21.5376 21.6665L20.8494 20.2902C22.2768 19.6275 23.5512 18.6589 24.6726 17.3845C25.7431 16.1611 26.3803 14.8612 26.5842 13.4849C26.8901 12.4144 26.9155 11.3694 26.6607 10.3499C25.5392 11.5733 24.0354 12.185 22.1493 12.185C20.4161 12.185 18.9888 11.6498 17.8674 10.5793C16.7459 9.55977 16.1852 8.13245 16.1852 6.29733C16.1852 4.51318 16.7714 3.06037 17.9438 1.93891C19.1163 0.868416 20.62 0.33317 22.4552 0.33317ZM6.70368 0.33317C7.9271 0.33317 8.99759 0.562561 9.91515 1.02134C10.8327 1.5311 11.5719 2.19378 12.1326 3.00939C12.6424 3.825 13.0502 4.79354 13.356 5.91501C13.6619 7.03648 13.8148 8.20892 13.8148 9.43233C13.8148 11.9301 13.1776 14.275 11.9032 16.467C10.5778 18.6589 8.53881 20.3921 5.78612 21.6665L5.09795 20.2902C6.52527 19.6275 7.79966 18.6589 8.92113 17.3845C9.99162 16.1611 10.6288 14.8612 10.8327 13.4849C11.1386 12.4144 11.1641 11.3694 10.9092 10.3499C9.78771 11.5733 8.28393 12.185 6.39783 12.185C4.66466 12.185 3.23734 11.6498 2.11587 10.5793C0.994406 9.55977 0.433672 8.13245 0.433672 6.29733C0.433672 4.51318 1.01989 3.06037 2.19234 1.93891C3.36478 0.868416 4.86856 0.33317 6.70368 0.33317Z"
                              fill="#BE70A7"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className={styles["text-block"]}>
                        <div className={clsx(styles.stars, "mb-8")}>
                          <StarIcon weight="fill" />
                          <StarIcon weight="fill" />
                          <StarIcon weight="fill" />
                          <StarIcon weight="fill" />
                          <StarIcon weight="fill" />
                        </div>
                        <div className={clsx(styles.info, "mb-16")}>
                          <span className="h6 color-primary">Ethan Clarke</span>
                          <span className="h6">Customer</span>
                        </div>
                        <p>
                          “Lorem ipsum dolor sit amet consectetur. Volutpat
                          egestas non posuere faucibus. Diam consequat eros
                          convallis enim consequat arcu vitae. Est porta netus
                          sit tellus non eget purus.”
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel.ContainerSlides>
              </Carousel.Content>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
