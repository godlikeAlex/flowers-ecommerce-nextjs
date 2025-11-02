"use client";

import { useRef } from "react";
import type { MouseEvent, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

import styles from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  accessoryLeft?: ReactNode;
  accessoryRight?: ReactNode;
}

export default function Button({
  variant = "ghost",
  children,
  accessoryLeft,
  accessoryRight,
  ...props
}: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);
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
    <button
      {...props}
      ref={buttonRef}
      onMouseEnter={handleMouseMove}
      onMouseLeave={handleMouseMove}
      className={clsx(styles.button, {
        [styles.outline]: variant === "outline",
        [styles.primary]: variant === "primary",
      })}
    >
      {accessoryLeft ? accessoryLeft : null}

      {children}

      {accessoryRight ? accessoryRight : null}

      <span ref={backgroundRef} />
    </button>
  );
}
