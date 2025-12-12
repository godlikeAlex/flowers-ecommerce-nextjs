import Image from "next/image";

import vector1 from "./vector-1.png";
import vector2 from "./vector-2.png";

import styles from "./PageBanner.module.css";

interface Props {
  title: string;
}

export default function PageBanner({ title }: Props) {
  return (
    <section className={styles["page-header"]}>
      <div className={styles.content}>
        <h2>{title}</h2>
      </div>
      <Image
        src={vector1}
        alt=""
        className={styles["left-vector"]}
        loading="eager"
        unoptimized
      />
      <Image
        loading="eager"
        unoptimized
        src={vector2}
        width={vector2.width}
        height={vector2.height}
        alt=""
        className={styles["right-vector"]}
      />
    </section>
  );
}
