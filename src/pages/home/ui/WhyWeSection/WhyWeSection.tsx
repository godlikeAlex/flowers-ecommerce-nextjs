import Image from "next/image";
import firstIcon from "./assets/first_icon.svg";
import secondIcon from "./assets/second_icon.svg";
import thirdIcon from "./assets/third_icon.svg";

import firstImage from "./assets/images/first.jpg";
import secondImage from "./assets/images/second.jpg";
import thirdImage from "./assets/images/third.jpg";

import styles from "./WhyWeSection.module.css";

const WHY_WE_CONTENT = [
  {
    title: "Experienced florists",
    description:
      "Our experienced florists have completed professional floral design training, bringing creativity, skill, and care into every bouquet and arrangement.",
    Icon: (
      <Image
        className={styles.icon}
        src={firstIcon}
        unoptimized
        alt="Experienced florists"
      />
    ),
    imagePath: firstImage,
  },
  {
    title: "Treat every order as a special",
    description:
      "We understand how important your occasion is, and we treat every order as a special moment worth celebrating. From classic styles to modern custom designs, we create flowers that tell a story — your story.",
    Icon: (
      <Image
        className={styles.icon}
        src={secondIcon}
        unoptimized
        alt="Treat every order as a special"
      />
    ),
    imagePath: secondImage,
  },
  {
    title: "Attention to Quality & Freshness",
    description:
      "We carefully select premium, fresh-cut flowers for every arrangement. Each bouquet is crafted with attention to detail, ensuring beautiful presentation, long-lasting blooms, and a memorable experience for you or your loved one.",
    Icon: (
      <Image
        className={styles.icon}
        src={thirdIcon}
        unoptimized
        alt="Attention to Quality & Freshness"
      />
    ),
    imagePath: thirdImage,
  },
];

export default function WhyWeSection() {
  return (
    <div className="container-fluid">
      <div className="heading text-center mb-48">
        <h2>
          Why Choose <span className="color-primary">Bluemelle</span>
        </h2>
      </div>

      <div className="row justify-content-center row-gap-3">
        {WHY_WE_CONTENT.map(
          ({ title, description, imagePath, Icon }, index) => (
            <div className="col-md-4" key={index}>
              <div className={styles["why-we-block"]}>
                <div className={styles["image-container"]}>
                  <Image src={imagePath} className={styles.image} alt={title} />
                </div>

                <div className={styles.content}>
                  <div className={styles["icon-container"]}>{Icon}</div>

                  <h4>{title}</h4>
                  <p className={styles.description}>{description}</p>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
