import { Anchor } from "@/shared/ui";
import Image from "next/image";
import { Icon } from "@iconify/react";

import { SubscribeForm } from "../SubscribeForm";

import styles from "./ComingSoon.module.css";

export default function ComingSoon() {
  return (
    <main className="x-hidden">
      <section className={styles["coming-soon-section"]}>
        <div className="container-fluid">
          <div className={styles.content}>
            <Image
              src="/images/logo.webp"
              width={280}
              height={235}
              alt="BLUEMELLE Flower Boutique"
            />
            <h2>We’re Almost Ready to Bloom</h2>
            <h6>
              Fresh flowers, balloons & gifts — all coming your way soon.
              <br />
              BLUEMELLE FLOWER BOUTIQUE
            </h6>
            <p>
              Our website is under construction — be patient, we’ll bloom soon.
              <br />
              Leave your information below, and we’ll let you know as soon as
              we’re live.
            </p>

            <SubscribeForm />

            <div className={styles["social-media-list"]}>
              <Anchor
                variant="text"
                target="_blank"
                href="https://www.instagram.com/bluemelle_flowers_nj?igsh=NDFld3liOWtsbHI0"
              >
                <Icon icon="bxl:instagram" />
              </Anchor>

              <Anchor
                variant="text"
                target="_blank"
                href="https://www.instagram.com/bluemelle_flowers_nj?igsh=NDFld3liOWtsbHI0"
              >
                <Icon icon="bxl:pinterest" />
              </Anchor>

              <Anchor
                variant="text"
                target="_blank"
                href="https://www.instagram.com/bluemelle_flowers_nj?igsh=NDFld3liOWtsbHI0"
              >
                <Icon icon="bxl:facebook-circle" />
              </Anchor>

              <Anchor
                variant="text"
                target="_blank"
                href="https://www.instagram.com/bluemelle_flowers_nj?igsh=NDFld3liOWtsbHI0"
              >
                <Icon icon="bxl:tiktok" />
              </Anchor>
            </div>

            <Anchor
              variant="text"
              href="https://maps.app.goo.gl/QXWxdJwzar1QxVHm7"
              target="_blank"
            >
              📍1212 Rt 34, Suite 25, Aberdeen, NJ 07747
            </Anchor>
          </div>
        </div>
      </section>
    </main>
  );
}
