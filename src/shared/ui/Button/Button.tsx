import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

export default function Button({ variant, ...props }: Props) {
  return <button {...props} className={variant}></button>;
}
