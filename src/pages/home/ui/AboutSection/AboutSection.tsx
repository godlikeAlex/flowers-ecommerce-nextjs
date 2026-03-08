"use client";

import { Button } from "@/shared/ui";

import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";

import styles from "./AboutSection.module.css";
import clsx from "clsx";
import Image from "next/image";

import imageAbout from "./about-3.png";
import Link from "next/link";
import { ROUTES } from "@/shared/config";

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
                      At <span className="color-primary">Bluemelle</span>
                      <br />
                      Flower Boutique
                    </h2>
                    <p className="mb-16">
                      We help people celebrate life events and meaningful
                      moments with thoughtfully designed floral arrangements.
                      Whether you’re surprising someone you love, honoring a
                      milestone, or simply brightening someone’s day, you
                      deserve flowers that feel personal, beautiful, and
                      unforgettable.
                    </p>

                    <p className="mb-16">
                      You shouldn’t have to struggle or feel overwhelmed when
                      choosing the right gift — we make it easy, joyful, and
                      stress‑free.
                    </p>

                    <Button
                      as={Link}
                      href={ROUTES.SHOP([])}
                      variant="ghost"
                      accessoryRight={<ArrowUpRightIcon />}
                    >
                      Buy Now
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
                      Warmth in <br /> every bouquet
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
