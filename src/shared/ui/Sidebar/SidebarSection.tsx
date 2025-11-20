"use client";

import { PropsWithChildren, useState } from "react";
import clsx from "clsx";
import { PlusIcon } from "@phosphor-icons/react/dist/ssr/Plus";
import { MinusIcon } from "@phosphor-icons/react/dist/ssr/Minus";

import styles from "./Sidebar.module.css";

interface Props {
  title: string;
}

export default function SidebarSection({
  title,
  children,
}: PropsWithChildren<Props>) {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div>
      <div className={clsx(styles["widget-title-row"], "mb-16")}>
        <h5>{title}</h5>

        <button
          className={styles["widget-togle"]}
          onClick={() => setIsHidden((isHidden) => !isHidden)}
        >
          {!isHidden ? <MinusIcon /> : <PlusIcon />}
        </button>
      </div>

      <hr className="dash-line" />

      <div
        className={clsx(
          styles["widget-content-block"],
          !isHidden && styles["show"],
        )}
      >
        <div className={styles["inner"]}>{children}</div>
      </div>
    </div>
  );
}
