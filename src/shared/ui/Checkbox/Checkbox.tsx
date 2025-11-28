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
        checked={checked}
        onChange={onChange}
        className={styles.checkbox}
        // className="group block size-4 rounded border bg-white data-checked:bg-blue-500"
      >
        <CheckIcon weight="bold" />
      </HeadlessCheckbox>
      {label && <Label>{label}</Label>}
    </Field>
  );
}
