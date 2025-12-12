import { Icon } from "@phosphor-icons/react/dist/lib/types";
import styles from "./Feature.module.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  title: string;
  description: string;
  icon: StaticImport;
}

export default function Feature({ title, description, icon }: Props) {
  return (
    <div className={styles["feature-block"]}>
      <div className={styles.icon}>
        <Image src={icon} alt={title} />
        {/*<IconElement width={52} height={52} />*/}
      </div>
      <div>
        <h5 className="mb-8">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}
