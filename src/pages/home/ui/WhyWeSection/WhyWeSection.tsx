import Image from "next/image";
import firstIcon from "./assets/first_icon.svg";
import secondIcon from "./assets/second_icon.svg";
import thirdIcon from "./assets/third_icon.svg";
import deliveryIcon from "./assets/delivery_icon.svg";
import localIcon from "./assets/local_icon.svg";
import orderIcon from "./assets/order_icon.svg";

import styles from "./WhyWeSection.module.css";

const WHY_WE_CONTENT = [
  {
    title: "Experienced Florists in Aberdeen, NJ",
    description:
      "Our team includes experienced florists who’ve trained in professional floral design and work with flowers every day. That skill shows in the details: balanced colors, clean lines, and arrangements that look polished from every angle. If you’re looking for a florist Aberdeen, NJ residents trust for everyday moments and big events, you’re in the right place.",
    Icon: (
      <Image
        className={styles.icon}
        src={firstIcon}
        unoptimized
        alt="Experienced florists"
      />
    ),
  },
  {
    title: "Every Order Is Treated Like It Matters",
    description:
      "A bouquet isn’t “just flowers.” It’s a message. That’s why we treat every request with care—whether it’s a small gesture or a once-in-a-lifetime celebration. From classic roses to modern, custom designs, we create arrangements that fit your occasion and your style. Need flower delivery Aberdeen, NJ for a last-minute surprise? We keep the process simple and the result memorable.",
    Icon: (
      <Image
        className={styles.icon}
        src={secondIcon}
        unoptimized
        alt="Treat every order as a special"
      />
    ),
  },
  {
    title: "Quality & Freshness You Can See",
    description:
      "We use fresh, premium blooms and handle them properly from the moment they arrive. Each arrangement is made to look beautiful on delivery and stay vibrant longer. When you order with us, you’re getting careful selection, clean design, and flowers that hold up—exactly what people expect when they search flower delivery near me.",
    Icon: (
      <Image
        className={styles.icon}
        src={thirdIcon}
        unoptimized
        alt="Attention to Quality & Freshness"
      />
    ),
  },
  {
    title: "Same Day Flower Delivery in Aberdeen, NJ",
    description:
      "Some moments can’t wait. We offer same day flower delivery Aberdeen, NJ when time matters—birthdays, anniversaries, apologies, and everything in between. If you need flowers delivered today Aberdeen, NJ, we focus on fast turnaround without cutting corners on presentation.",
    Icon: (
      <Image
        className={styles.icon}
        src={deliveryIcon}
        unoptimized
        alt="Same Day Flower Delivery in Aberdeen, NJ"
      />
    ),
  },
  {
    title: "Easy Online Ordering, Fast Confirmation",
    description:
      "Ordering should take minutes, not hours. You can order flowers online Aberdeen, NJ with a smooth checkout and clear options. Choose a style, add a note, pick delivery, and you’re done. If you’re searching for a reliable flower delivery Aberdeen, NJ option that’s quick and straightforward, this is built for you.",
    Icon: (
      <Image
        className={styles.icon}
        src={orderIcon}
        unoptimized
        alt="Attention to Quality & Freshness"
      />
    ),
  },
  {
    title: "Local Service, Personal Attention",
    description:
      "As a local florist Aberdeen, NJ, we know what customers here expect: clear communication, on-time delivery, and arrangements that match the photos and the promise. When you need same day flowers Aberdeen, NJ, you’re not dealing with a call center—you’re working with a real shop that designs and delivers locally.",
    Icon: (
      <Image
        className={styles.icon}
        src={localIcon}
        unoptimized
        alt="Attention to Quality & Freshness"
      />
    ),
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

      <div className="row justify-content-center row-gap-5">
        {WHY_WE_CONTENT.map(({ title, description, Icon }, index) => (
          <div className="col-md-4 mt-5" key={index}>
            <div className={styles["why-we-block"]}>
              <div className={styles.content}>
                <div className={styles["icon-container"]}>{Icon}</div>

                <h4>{title}</h4>
                <p className={styles.description}>{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
