import type { CSSProperties, PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./InputErrorMessage.module.css";

interface Props {
  className?: string;
  style?: CSSProperties;
}

export default function InputErrorMessage({
  children,
  style,
  className,
}: PropsWithChildren<Props>) {
  return (
    <p style={style} className={clsx(styles.error, className)}>
      {children}
    </p>
  );
}
