import { useId, type InputHTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./Input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | boolean;
}

export default function Input({ error, className, ...props }: Props) {
  const errorInputId = useId();

  const errorMessage = typeof error === "string" ? error : null;

  return (
    <label>
      <input
        {...props}
        className={clsx(styles.input, error && styles.error, className)}
        aria-invalid={Boolean(error)}
        aria-errormessage={errorMessage ? errorInputId : undefined}
      />
      {errorMessage && (
        <p id={errorInputId} className={clsx(styles.errorMessage)}>
          {errorMessage}
        </p>
      )}
    </label>
  );
}
