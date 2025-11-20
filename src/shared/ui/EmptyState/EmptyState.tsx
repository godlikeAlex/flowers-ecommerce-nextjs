import { PropsWithChildren } from "react";

import styles from "./EmptyState.module.css";
import clsx from "clsx";

export default function EmptyState({ children }: PropsWithChildren) {
  return <div className={clsx(styles["root"], "text-center")}>{children}</div>;
}

function EmptyStateImage({ children }: PropsWithChildren) {
  return <div className={styles.imageContainer}>{children}</div>;
}

function EmptyStateIcon({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

function EmptyHeading({ children }: PropsWithChildren) {
  return <h2>{children}</h2>;
}

function EmptyDescription({ children }: PropsWithChildren) {
  return <p>{children}</p>;
}

function EmptyStateHead({ children }: PropsWithChildren) {
  return <div className={styles.content}>{children}</div>;
}

function EmptyStateActions({ children }: PropsWithChildren) {
  return <div className={styles.actions}>{children}</div>;
}

function EmptyStateFooter({ children }: PropsWithChildren) {
  return <footer>{children}</footer>;
}

EmptyState.Heading = EmptyHeading;
EmptyState.Description = EmptyDescription;
EmptyState.Head = EmptyStateHead;
EmptyState.Actions = EmptyStateActions;
EmptyState.Footer = EmptyStateFooter;
EmptyState.Icon = EmptyStateIcon;
EmptyState.Image = EmptyStateImage;
