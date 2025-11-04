import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./Input.module.css";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: Props) {
  return <input className={clsx(styles.input)} {...props} />;
}
