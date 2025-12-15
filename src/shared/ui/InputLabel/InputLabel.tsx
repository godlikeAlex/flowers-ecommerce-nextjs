import clsx from "clsx";
import { CSSProperties, PropsWithChildren } from "react";

import styles from "./InputLabel.module.css";

interface Props {
  className?: string;
  style?: CSSProperties;
}

export default function InputLabel({
  children,
  style,
  className,
}: PropsWithChildren<Props>) {
  return (
    <div style={style} className={clsx(styles.label, className)}>
      {children}
    </div>
  );
}
