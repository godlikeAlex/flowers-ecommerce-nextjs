import { TextareaHTMLAttributes, useId } from "react";

import styles from "./Textarea.module.css";
import clsx from "clsx";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string | boolean;
}

export default function Textarea({ error, className, label, ...props }: Props) {
  const errorInputId = useId();

  const errorMessage = typeof error === "string" ? error : null;

  return (
    <label className="w-100">
      {label && <div className={styles.label}>{label}</div>}

      <textarea
        {...props}
        className={clsx(styles.textArea, error && styles.error, className)}
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
