import { Field, Checkbox as HeadlessCheckbox, Label } from "@headlessui/react";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";

import styles from "./Checkbox.module.css";

interface Props {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export default function Checkbox({ label, checked, onChange }: Props) {
  return (
    <Field className="d-flex align-items-center gap-2">
      <HeadlessCheckbox
        checked={Boolean(checked)}
        onChange={onChange}
        className={styles.checkbox}
      >
        <CheckIcon weight="bold" />
      </HeadlessCheckbox>
      {label && <Label>{label}</Label>}
    </Field>
  );
}
