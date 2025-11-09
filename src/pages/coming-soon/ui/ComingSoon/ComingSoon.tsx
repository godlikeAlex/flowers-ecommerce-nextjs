import { Anchor } from "@/shared/ui";
import Image from "next/image";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";
import { PinterestLogoIcon } from "@phosphor-icons/react/dist/ssr/PinterestLogo";
import { FacebookLogoIcon } from "@phosphor-icons/react/dist/ssr/FacebookLogo";
import { TiktokLogoIcon } from "@phosphor-icons/react/dist/ssr/TiktokLogo";

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
                <InstagramLogoIcon />
              </Anchor>

              <Anchor
                variant="text"
                target="_blank"
                href="https://www.instagram.com/bluemelle_flowers_nj?igsh=NDFld3liOWtsbHI0"
              >
                <PinterestLogoIcon />
              </Anchor>

              <Anchor
                variant="text"
                target="_blank"
                href="https://www.instagram.com/bluemelle_flowers_nj?igsh=NDFld3liOWtsbHI0"
              >
                <FacebookLogoIcon />
              </Anchor>

              <Anchor
                variant="text"
                target="_blank"
                href="https://www.instagram.com/bluemelle_flowers_nj?igsh=NDFld3liOWtsbHI0"
              >
                <TiktokLogoIcon />
              </Anchor>
            </div>

            <Anchor
              variant="text"
              href="https://maps.app.goo.gl/3ELdT5n8ZiYAYXTT7"
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
