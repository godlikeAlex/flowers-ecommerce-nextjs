"use client";

import clsx from "clsx";
import styles from "./OfferBanner.module.css";

import Image from "next/image";

import offerBannerBackgroundImage from "./offer-banner.png";

export default function OfferBanner() {
  return (
    <section className="py-40">
      <div className="container-fluid">
        <div className={styles.banner}>
          <div className={styles.content}>
            <div>
              <Image
                fill
                className={styles["bg-shape-vector"]}
                src="/images/bg/banner-bg-vector.png"
                alt=""
              />
            </div>
            <div className="row justify-content-end">
              <div className="col-lg-6 col-6 order-lg-2">
                <div className={clsx(styles["img-block"], "text-end")}>
                  <Image
                    fill
                    className="d-lg-block d-none ms-auto"
                    src={offerBannerBackgroundImage}
                    alt=""
                  />
                  <Image
                    fill
                    src={offerBannerBackgroundImage}
                    alt=""
                    className="d-lg-none"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12 order-lg-1">
                <div className={styles["text-block"]}>
                  <h4>SPECIAL OFFER</h4>
                  <span className={styles["title-1"]}>Veterans & Seniors</span>
                  <span className={clsx(styles["title-2"], "mb-12")}>
                    5% Discount
                  </span>
                  <h2> In-Store Only</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
