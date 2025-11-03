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

type Props<C extends ElementType> = {
  as?: C;
  variant?: "primary" | "ghost" | "outline";
  accessoryLeft?: ReactNode;
  accessoryRight?: ReactNode;
} & ComponentPropsWithoutRef<C>;

export default function Button<C extends ElementType = "button">({
  variant = "ghost",
  children,
  accessoryLeft,
  accessoryRight,
  as,
  ...props
}: Props<C>) {
  const Component = as ?? "button";

  const buttonRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!backgroundRef.current || !buttonRef.current) return;

    const buttonPosition = buttonRef.current.getBoundingClientRect();

    const x = e.pageX - buttonPosition.left;
    const y = e.pageY - buttonPosition.top;

    backgroundRef.current.style.left = `${x}px`;
    backgroundRef.current.style.top = `${y}px`;
  };

  return (
    <Component
      {...props}
      onMouseEnter={handleMouseMove}
      onMouseLeave={handleMouseMove}
      className={clsx(styles.button, {
        [styles.outline]: variant === "outline",
        [styles.primary]: variant === "primary",
      })}
    >
      <div className={styles.buttonWrapper} ref={buttonRef}>
        {accessoryLeft ? accessoryLeft : null}
        {children}
        {accessoryRight ? accessoryRight : null}
        <span ref={backgroundRef} />
      </div>
    </Component>
  );
}
