import type { ElementType, ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

import styles from "./Anchor.module.css";

type Props<C extends ElementType> = {
  variant?: "hover" | "underline" | "text" | "basic";
  as?: C;
  className?: string;
} & ComponentPropsWithoutRef<C>;

export default function Anchor<C extends ElementType = "a">({
  as,
  className,
  variant = "hover",
  ...props
}: Props<C>) {
  const Component = as ?? "a";

  return (
    <Component
      {...props}
      className={clsx(
        {
          [styles["link-hover"]]: variant === "hover",
          [styles["link-underline"]]: variant === "underline",
          [styles["link-text"]]: variant === "text",
          [styles["link-basic"]]: variant === "basic",
        },
        className,
      )}
    />
  );
}
