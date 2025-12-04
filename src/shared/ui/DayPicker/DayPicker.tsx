"use client";

import { useState, type ComponentProps } from "react";
import { Input } from "../Input";
import {
  DayPickerProps,
  DayPicker as ReactDayPicker,
  getDefaultClassNames,
} from "react-day-picker";
import useOnclickOutside from "react-cool-onclickoutside";
import clsx from "clsx";

import styles from "./DayPicker.module.css";

import "react-day-picker/style.css";

type Props = {
  placeholder?: string;
  inputDisabled?: boolean;
  error?: string | boolean;
} & DayPickerProps;

export default function DayPicker({
  placeholder,
  error,
  inputDisabled,
  ...props
}: Props) {
  const [isShowingCalendar, setIsShowingCalendar] = useState(false);
  const defaultClassNames = getDefaultClassNames();

  const ref = useOnclickOutside(() => {
    setIsShowingCalendar(false);
  });

  const localeSelected =
    props.mode === "single" ? props.selected?.toLocaleDateString() : "";

  return (
    <div ref={ref}>
      <Input
        placeholder={placeholder}
        readOnly
        disabled={inputDisabled}
        onClick={() => setIsShowingCalendar((isShowing) => !isShowing)}
        style={{ cursor: "pointer" }}
        error={error}
        defaultValue={localeSelected}
      />

      {isShowingCalendar && (
        <ReactDayPicker
          {...props}
          classNames={{
            caption_label: clsx(
              defaultClassNames["caption_label"],
              styles["current-month"],
            ),
            today: styles.today,
            selected: clsx(defaultClassNames["today"], styles.selected),
            root: clsx(defaultClassNames["root"], styles["root-picker"]),
          }}
          footer={
            props.footer ? (
              props.footer
            ) : (
              <p className="mt-2 color-primary">
                {localeSelected
                  ? `Selected Day: ${localeSelected}`
                  : "Pick a Day"}
              </p>
            )
          }
        />
      )}
    </div>
  );
}
