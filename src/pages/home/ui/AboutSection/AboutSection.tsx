import { Button } from "@/shared/ui";

import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";

import styles from "./AboutSection.module.css";
import clsx from "clsx";
import Image from "next/image";

import imageAbout from "./about.png";

export default function AboutSection() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-11 col-md-10">
          <div className={styles.content}>
            <div className="row align-items-center justify-content-lg-start justify-content-center row-gap-4">
              <div className="col-xl-7 col-lg-6">
                <div className="row">
                  <div className="col-xxl-10 col-xl-11">
                    <h2 className="mb-16 title">
                      Floral Journeys,
                      <br /> Making Magic,{" "}
                      <span className="color-primary">One Bloom</span> at a Time
                    </h2>
                    <p className="mb-16">
                      Every bloom tells a story, and we are here to bring those
                      stories to life. Our floral arrangements are crafted with
                      care, combining color, texture, and natural elegance to
                      highlight the beauty in every moment. Whether celebrating
                      a special occasion or adding charm to your everyday, our
                      flowers are chosen for their freshness, character, and
                      ability to inspire. Each bouquet is thoughtfully designed
                      to create a sense of warmth and harmony, turning simple
                      stems into meaningful expressions.
                    </p>

                    <p className="mb-16">
                      We believe flowers hold the power to transform spaces and
                      emotions alike. Guided by creativity and a passion for
                      detail, we blend artistic craftsmanship with the timeless
                      grace of nature. From festive gifts to personal gestures,
                      our arrangements are made to elevate your moments with
                      color, fragrance, and joy. Let our blooms accompany your
                      celebrations and add a touch of beauty to the stories you
                      continue to write.
                    </p>

                    <Button
                      variant="ghost"
                      accessoryRight={<ArrowUpRightIcon />}
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-7 col-10">
                <div className={clsx(styles["img-block"], "mx-auto")}>
                  <Image src={imageAbout} alt="" />
                  <Image
                    width={220}
                    height={220}
                    src="/images/about/about-1-object.png"
                    alt=""
                    className={styles["img-object"]}
                  />
                  <div className={styles["about-tag"]}>
                    <h3>
                      25 Years <br />
                      Experience
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <Image
              className={styles["vector-mockup"]}
              fill
              src="/images/bg/about-bg-vector.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
