import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import clsx from "clsx";

import styles from "./IconButton.module.css";

type Props<C extends ElementType> = {
  icon: ReactNode;
  as?: C;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  disabled?: boolean;
} & ComponentPropsWithoutRef<C>;

export default function IconButton<C extends ElementType = "button">({
  as,
  icon,
  className,
  variant = "primary",
  ...props
}: Props<C>) {
  const Component = as ?? "button";

  return (
    <Component
      className={clsx(
        styles["icon-button"],
        {
          [styles["icon-button--primary"]]: variant === "primary",
          [styles["icon-button--outline"]]: variant === "outline",
          [styles["icon-button--ghost"]]: variant === "ghost",
        },
        className,
      )}
      {...props}
    >
      {icon}
    </Component>
  );
}
