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
                      Bloom Chronicles,
                      <br /> Crafting Beauty,{" "}
                      <span className="color-primary">One Flower</span> <br />
                      at a Time
                    </h2>
                    <p className="mb-16">
                      Lorem ipsum dolor sit amet consectetur. Posuere odio a
                      interdum morbi velit elit id ac et. Congue elit risus
                      senectus arcu tortor maecenas commodo magna. Sed lobortis
                      egestas fringilla elementum vulputate pellentesque velit.
                      Lectus adipiscing faucibus semper quis gravida ut odio
                      faucibus. Orci sit aliquam vestibulum varius ultricies
                      sed. Ligula amet amet in curabitur sed nunc imperdiet sit
                      venenatis. Habitasse aenean auctor sed odio et. Sed
                      iaculis pulvinar morbi in commodo malesuada sed.
                    </p>

                    <p className="mb-16">
                      Sed quisque ipsum risus senectus quis curabitur quis.
                      Lorem auctor cras elit quis rhoncus pretium arcu eget
                      malesuada. Facilisi gravida maecenas aliquam eget nunc
                      porttitor. In et ac magna cursus quisque. Aliquam laoreet
                      ut quis velit. Euismod duis sem integer dolor facilisis
                      ut. Tortor aenean aliquet quis aliquam diam vel.
                      Ullamcorper risus semper hendrerit amet velit mauris
                      donec. Sed sollicitudin at lacus donec velit. Ornare
                      dignissim purus tincidunt dictum odio ac ut ut.
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
