import { Anchor, Button, Input } from "@/shared/ui";
import Image from "next/image";
import { Icon } from "@iconify/react";

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

            <form className={styles.form}>
              <Input type="email" placeholder="Your Email" />
              <Button
                variant="primary"
                type="submit"
                accessoryRight={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="M19.8739 7.98103C19.53 7.98103 19.2038 8.05711 18.9102 8.19234C18.6749 7.16583 17.7548 6.3975 16.658 6.3975C16.3065 6.3975 15.9733 6.47667 15.6748 6.61762C15.4112 5.63128 14.5103 4.90252 13.442 4.90252C13.121 4.90252 12.8151 4.96842 12.5371 5.0872V2.31112C12.5371 1.03673 11.5004 0 10.226 0C8.95161 0 7.91483 1.03673 7.91483 2.31112L7.91483 13.3079L6.72318 11.5389L6.70452 11.5157C5.8123 10.4066 4.2426 10.1601 3.05343 10.9425C2.43158 11.3516 2.01032 11.9791 1.86716 12.7095C1.7249 13.4354 1.87541 14.171 2.29096 14.7823L6.54388 21.4861L6.55804 21.5076C7.62997 23.0682 9.4003 24 11.2936 24H16.0657C19.4399 24 22.185 21.2549 22.185 17.8807V10.2921C22.185 9.01777 21.1483 7.98103 19.8739 7.98103ZM20.7788 17.8807C20.7788 20.4795 18.6645 22.5937 16.0657 22.5937H11.2936C9.86783 22.5937 8.53447 21.8941 7.72429 20.7216L3.47197 14.0188L3.45782 13.9974C3.25208 13.6978 3.17732 13.3365 3.24716 12.9799C3.31705 12.6234 3.52274 12.317 3.8263 12.1173C4.39935 11.7403 5.15347 11.8527 5.5918 12.3765L9.32108 17.9123V2.31112C9.32108 1.81214 9.72702 1.40625 10.226 1.40625C10.725 1.40625 11.1309 1.81214 11.1309 2.31112V10.6528H12.5371V7.21369C12.5371 6.7147 12.943 6.30881 13.442 6.30881C13.941 6.30881 14.3469 6.7147 14.3469 7.21369V10.6528H15.7531V8.70862C15.7531 8.20964 16.159 7.80375 16.658 7.80375C17.157 7.80375 17.5629 8.20964 17.5629 8.70862V10.6528H18.9691V10.2922C18.9691 9.79317 19.375 9.38728 19.874 9.38728C20.373 9.38728 20.7789 9.79317 20.7789 10.2922V17.8807H20.7788Z" />
                  </svg>
                }
              >
                Send
              </Button>
            </form>

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
