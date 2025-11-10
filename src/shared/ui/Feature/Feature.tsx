import { Icon } from "@phosphor-icons/react/dist/lib/types";
import styles from "./Feature.module.css";

interface Props {
  title: string;
  description: string;
  icon: Icon;
}

export default function Feature({
  title,
  description,
  icon: IconElement,
}: Props) {
  return (
    <div className={styles["feature-block"]}>
      <div className={styles.icon}>
        <IconElement width={52} height={52} />
      </div>
      <div>
        <h5 className="mb-8">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}
