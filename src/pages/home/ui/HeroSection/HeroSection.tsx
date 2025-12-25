"use client";

import clsx from "clsx";
import { Button } from "@/shared/ui";

import { HandPointingIcon } from "@phosphor-icons/react/dist/ssr/HandPointing";
import { FlowerTulipIcon } from "@phosphor-icons/react/dist/ssr/FlowerTulip";

import styles from "./HeroSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/shared/config";

import heroImage from "./hero-image.jpg";

export default function HeroSection() {
  return (
    <section className={clsx(styles["hero-banner"])}>
      <div className={clsx(styles.content)}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className={clsx(styles["text-block"])}>
                <h1 className={clsx(styles.title)}>
                  Family Floral <span className="color-primary">Boutique</span>{" "}
                  <br />
                  Delivering <span className="color-primary">Emotion</span>{" "}
                  <br />
                  Through <span className="color-primary">Flowers</span>
                </h1>

                <div className={clsx(styles["btn-block"])}>
                  <Button
                    as={Link}
                    variant="primary"
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        loading="eager"
        src={heroImage}
        alt="Bluemelle"
        fill
        className={styles["hero-image"]}
      />
    </section>
  );
}
