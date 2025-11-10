import clsx from "clsx";
import styles from "./OfferBanner.module.css";
import { Button } from "@/shared/ui";

import { FlowerTulipIcon } from "@phosphor-icons/react/dist/ssr/FlowerTulip";
import Image from "next/image";

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
                    src="/images/bg/banner-img-xl.png"
                    alt=""
                  />
                  <Image
                    fill
                    src="/images/bg/banner-img.png"
                    alt=""
                    className="d-lg-none"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12 order-lg-1">
                <div className={styles["text-block"]}>
                  <h3 className="mb-16">SPECIAL OFFER</h3>
                  <span className={styles["title-1"]}>SUMMER</span>
                  <span className={clsx(styles["title-2"], "mb-12")}>Sale</span>
                  <h1 className="mb-32">UP TO 50% OFF</h1>
                  <Button
                    className="mx-auto"
                    accessoryRight={<FlowerTulipIcon />}
                  >
                    Shop now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
