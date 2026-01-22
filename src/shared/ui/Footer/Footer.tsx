import clsx from "clsx";

import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";
import { PinterestLogoIcon } from "@phosphor-icons/react/dist/ssr/PinterestLogo";
import { FacebookLogoIcon } from "@phosphor-icons/react/dist/ssr/FacebookLogo";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { TiktokLogoIcon } from "@phosphor-icons/react/dist/ssr/TiktokLogo";
import { ClockIcon } from "@phosphor-icons/react/dist/ssr/Clock";
import { PhoneIcon } from "@phosphor-icons/react/dist/ssr/Phone";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import { MapPinSimpleIcon } from "@phosphor-icons/react/dist/ssr/MapPinSimple";

import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/shared/config";
import { Anchor } from "../Anchor";
import { CategoryMenu } from "@/entities/category";

interface Props {
  categories: CategoryMenu[];
}

export default function Footer({ categories }: Props) {
  return (
    <footer>
      <div className={styles["footer-main"]}>
        <div className="container-fluid">
          <div className="row row-gap-4  mb-32">
            <div className="col-lg-3 col-md-6 col-sm-6 order-lg-1">
              <div className={styles["footer-widget"]}>
                <Link href={ROUTES.HOME}>
                  <Image
                    src="/images/logo-width.svg"
                    width={245}
                    height={139}
                    alt="BLUEMELLE Flower Boutique"
                    className={"mb-16"}
                  />
                </Link>

                <p className="mb-24">
                  At BLUEMELLE Boutique, we bring joy and beauty to every day.
                  From fresh bouquets to unique floral arrangements, each
                  creation is made with love and care to brighten your life and
                  the lives of those you cherish. Explore our selection and let
                  nature’s elegance speak for you.
                </p>
                <div className={styles.time}>
                  <div className={styles.icon}>
                    <ClockIcon />
                  </div>
                  <p>
                    <span className="accent-dark">MON - FRI</span>
                    <br />
                    <span className="accent-dark">10:00 AM - 05:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-7 order-lg-5">
              <div className={styles["footer-widget"]}>
                <h4 className="mb-32">Contact Us</h4>
                <ul
                  className={clsx("unstyled", styles["contacts-list"], "mb-32")}
                >
                  <li>
                    <p>
                      <span className={styles.icon}>
                        <PhoneIcon />
                      </span>
                      <Anchor
                        as={Link}
                        variant="hover"
                        href="tel:+18483450492"
                        className="accent-dark"
                      >
                        +1 848-345-0492
                      </Anchor>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className={styles.icon}>
                        <EnvelopeSimpleIcon />
                      </span>
                      <Anchor
                        as={Link}
                        variant="hover"
                        href="mailto:info@bluemelle.com"
                        className="accent-dark"
                      >
                        info@bluemelle.com
                      </Anchor>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className={styles.icon}>
                        <MapPinSimpleIcon />
                      </span>
                      <Anchor
                        as={Link}
                        href="https://maps.app.goo.gl/QXWxdJwzar1QxVHm7"
                        target="_blank"
                        variant="hover"
                      >
                        1212 Rt 34, Suite 25, Aberdeen, NJ 07747
                      </Anchor>
                    </p>
                  </li>
                </ul>
                <ul className={clsx("unstyled", styles["social-icons"])}>
                  <li>
                    <Link
                      href="https://api.whatsapp.com/send?phone=18483450492"
                      target="_blank"
                    >
                      <WhatsappLogoIcon />
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://www.instagram.com/bluemelle_flowers_nj/"
                      target="_blank"
                    >
                      <InstagramLogoIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <FacebookLogoIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <PinterestLogoIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <TiktokLogoIcon />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-5 order-lg-3">
              <div className={styles["footer-widget"]}>
                <h4 className="mb-32">Shop</h4>
                <ul
                  className={clsx("unstyled links-list", styles["links-list"])}
                >
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Anchor
                        variant="hover"
                        href={ROUTES.SHOP([category.slug])}
                      >
                        {category.name}
                      </Anchor>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 order-lg-2">
              <div className={styles["footer-widget"]}>
                <h4 className="mb-32">Useful Links</h4>
                <ul
                  className={clsx("unstyled links-list", styles["links-list"])}
                >
                  <li>
                    <Anchor variant="hover" href="contact.html">
                      Contact us
                    </Anchor>
                  </li>
                  <li>
                    <Anchor variant="hover" href={ROUTES.BLOG("")}>
                      Blog
                    </Anchor>
                  </li>
                  <li>
                    <Anchor variant="hover" href={ROUTES.ACCOUNT}>
                      Account
                    </Anchor>
                  </li>
                  <li>
                    <Anchor variant="hover" href={ROUTES.CART}>
                      Cart
                    </Anchor>
                  </li>
                  <li>
                    <Anchor variant="hover" href={ROUTES.CHECKOUT}>
                      Checkout
                    </Anchor>
                  </li>
                  <li>
                    <Anchor variant="hover" href={ROUTES.PRIVACY_POLICY}>
                      Privacy Policy
                    </Anchor>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 order-lg-4">
              <div className={styles["footer-widget"]}>
                <h4 className="mb-32">Our Blog</h4>
                <ul
                  className={clsx("unstyled links-list", styles["links-list"])}
                >
                  <li>
                    <Anchor variant="hover" href="/blog/news">
                      News
                    </Anchor>
                  </li>
                  <li>
                    <Anchor variant="hover" href="/blog/holidays-events">
                      Holidays
                    </Anchor>
                  </li>
                  <li>
                    <Anchor variant="hover" href="/blog/holidays-events">
                      Events
                    </Anchor>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="dash-line" />

          <div className={styles["footer-bottom"]}>
            <div className="row row-gap-4">
              <div className="col-sm-9">
                <p className="accent-dark text-sm-start text-center">
                  @2025 All Rights Copyright BLUEMELLE.
                </p>
              </div>
              <div className="col-sm-3 text-sm-end text-center">
                <Image
                  width={133}
                  height={28}
                  src="/images/payments.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
