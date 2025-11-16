import type { PropsWithChildren } from "react";
import clsx from "clsx";
import { XCircleIcon } from "@phosphor-icons/react/dist/ssr/XCircle";
import { InfoIcon } from "@phosphor-icons/react/dist/ssr/Info";
import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr/CheckCircle";

import styles from "./Alert.module.css";
import { Icon } from "@phosphor-icons/react/dist/lib/types";

type AlertType = "info" | "error" | "success";

interface Props {
  title?: string;
  type?: AlertType;
  className?: string;
}

const alertTypes: Record<AlertType, { className: string; icon: Icon }> = {
  error: {
    icon: XCircleIcon,
    className: styles["alert--error"],
  },
  info: {
    icon: InfoIcon,
    className: styles["alert--info"],
  },
  success: {
    icon: CheckCircleIcon,
    className: styles["alert--success"],
  },
};

export default function Alert({
  title,
  children,
  className,
  type = "info",
}: PropsWithChildren<Props>) {
  const alertType = alertTypes[type];

  return (
    <div
      className={clsx(styles.alert, alertType.className, className)}
      role="alert"
    >
      {title && (
        <p className={styles.alertTitle}>
          <alertType.icon /> {title}
        </p>
      )}
      {children}
    </div>
  );
}
