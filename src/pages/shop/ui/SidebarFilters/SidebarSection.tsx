import clsx from "clsx";

import styles from "./SidebarFilters.module.css";
import { PropsWithChildren } from "react";

interface Props {
  title: string;
}

export default function SidebarSection({ title }: PropsWithChildren<Props>) {
  return (
    <div>
      <div className={clsx(styles["widget-title-row"], "mb-24")}></div>
      <hr className={styles["dash-line"]} />
    </div>
  );
}
