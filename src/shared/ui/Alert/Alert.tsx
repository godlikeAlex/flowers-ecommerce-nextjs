import type { PropsWithChildren } from "react";
import clsx from "clsx";
import { Icon } from "@iconify/react";

import styles from "./Alert.module.css";

type AlertType = "info" | "error" | "success";

interface Props {
  title?: string;
  type?: AlertType;
  className?: string;
}

const alertTypes: Record<AlertType, { className: string; icon: string }> = {
  error: {
    icon: "ant-design:close-circle-twotone",
    className: styles["alert--error"],
  },
  info: {
    icon: "ant-design:info-circle-twotone",
    className: styles["alert--info"],
  },
  success: {
    icon: "ant-design:check-circle-twotone",
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
          <Icon icon={alertType.icon} /> {title}
        </p>
      )}
      {children}
    </div>
  );
}
