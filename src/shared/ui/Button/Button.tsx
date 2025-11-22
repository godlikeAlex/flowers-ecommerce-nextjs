"use client";

import { useRef } from "react";
import type {
  MouseEvent,
  ReactNode,
  ElementType,
  ComponentPropsWithoutRef,
} from "react";
import clsx from "clsx";

import styles from "./Button.module.css";
import { ThreeDots } from "react-loader-spinner";

type Props<C extends ElementType> = {
  as?: C;
  className?: string;
  classNameWrapper?: string;
  variant?: "primary" | "ghost" | "outline";
  status?: "primary" | "danger";
  accessoryLeft?: ReactNode;
  accessoryRight?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
} & ComponentPropsWithoutRef<C>;

export default function Button<C extends ElementType = "button">({
  variant = "ghost",
  status = "primary",
  children,
  accessoryLeft,
  accessoryRight,
  as,
  className,
  classNameWrapper,
  loading = false,
  disabled = false,
  ...props
}: Props<C>) {
  const Component = as ?? "button";

  const isDisabled = disabled || loading;

  const buttonRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!backgroundRef.current || !buttonRef.current) return;

    const buttonPosition = buttonRef.current.getBoundingClientRect();

    const x = e.pageX - (buttonPosition.left + window.pageXOffset);
    const y = e.pageY - (buttonPosition.top + window.pageYOffset);

    backgroundRef.current.style.left = `${x}px`;
    backgroundRef.current.style.top = `${y}px`;
  };

  return (
    <Component
      {...props}
      disabled={isDisabled}
      onMouseEnter={handleMouseMove}
      onMouseLeave={handleMouseMove}
      className={clsx(
        styles.button,
        {
          [styles.outline]: variant === "outline",
          [styles.primary]: variant === "primary",
          [styles.ghost]: variant === "ghost",
        },
        {
          [styles.danger]: status === "danger",
        },
        loading && styles.loading,
        className,
      )}
    >
      {loading && (
        <ThreeDots visible={true} radius="9" wrapperClass={styles.loader} />
      )}

      <div
        className={clsx(styles.buttonWrapper, classNameWrapper)}
        ref={buttonRef}
      >
        {accessoryLeft ? accessoryLeft : null}
        {children}
        {accessoryRight ? accessoryRight : null}

        <span ref={backgroundRef} />
      </div>
    </Component>
  );
}
