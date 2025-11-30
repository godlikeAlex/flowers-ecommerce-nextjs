import { ComponentProps } from "react";
import { Replacement, InputMask as ReactInputMask } from "@react-input/mask";
import Input from "./Input";

interface Props extends ComponentProps<typeof Input> {
  mask?: string;
  replacement?: string | Replacement;
  showMask?: boolean;
  separate?: boolean;
}

export default function InputMask({ mask, replacement, ...props }: Props) {
  return (
    <ReactInputMask
      mask={mask}
      replacement={replacement}
      component={Input}
      {...props}
    />
  );
}
