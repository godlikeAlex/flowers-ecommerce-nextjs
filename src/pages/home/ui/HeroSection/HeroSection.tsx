"use client";

import clsx from "clsx";
import { Button } from "@/shared/ui";

import { HandPointingIcon } from "@phosphor-icons/react/dist/ssr/HandPointing";
import { FlowerTulipIcon } from "@phosphor-icons/react/dist/ssr/FlowerTulip";

import styles from "./HeroSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/shared/config";

import heroImage from "./hero-image.png";

export default function HeroSection() {
  return (
    <section className={clsx(styles["hero-banner"])}>
      <div className={clsx(styles.content)}>
        <div className="container-fluid">
          <div className="row align-items-end justify-content-center">
            <div className="col-xl-5">
              <div className={clsx(styles["text-block"])}>
                <Image
                  src="/images/hero/image-vector-1.png"
                  alt=""
                  loading="eager"
                  width={216}
                  height={195}
                  className={clsx(styles["banner-vector"], styles["vector-1"])}
                />
                <Image
                  src="/images/hero/flower-vector.png"
                  className={clsx(styles["banner-vector"], styles["vector-2"])}
                  alt=""
                  loading="eager"
                  width={39}
                  height={51}
                />
                <h1 className={clsx(styles.title)}>
                  Bring Celebration Home <br /> with our{" "}
                  <span className="color-primary"> Bouquets </span>{" "}
                  {/*<span className="color-primary"> Bouquets</span>*/}
                  <br /> and Gifts
                </h1>

                <div className={clsx(styles["btn-block"])}>
                  <Button
                    as={Link}
                    href={ROUTES.SHOP([])}
                    accessoryRight={<FlowerTulipIcon />}
                  >
                    Shop Now
                  </Button>
                  <Button
                    as={Link}
                    href={ROUTES.CONTACT_US()}
                    variant="outline"
                    accessoryRight={<HandPointingIcon />}
                  >
                    Contact us
                  </Button>
                </div>
                <Image
                  width={39}
                  height={51}
                  loading="eager"
                  src="/images/hero/flower-vector.png"
                  alt=""
                  className={clsx(styles["banner-vector"], styles["vector-3"])}
                />
                <Image
                  width={179}
                  height={162}
                  preload
                  src="/images/hero/image-vector-3.png"
                  alt=""
                  loading="eager"
                  className={clsx(styles["banner-vector"], styles["vector-4"])}
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-8 col-sm-10 col-11">
              <div className={styles["img-block"]}>
                <Image
                  quality={95}
                  // width={970}
                  // height={659}
                  src={heroImage}
                  loading="eager"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/hero/image-vector-2.png"
          width={196}
          height={189}
          preload
          alt=""
          className={clsx(styles["banner-vector"], styles["vector-5"])}
        />
      </div>
    </section>
  );
}
