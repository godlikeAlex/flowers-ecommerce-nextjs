import { PropsWithChildren } from "react";
import SidebarSection from "./SidebarSection";
import styles from "./Sidebar.module.css";
import clsx from "clsx";

interface Props {
  className?: string;
}

export default function Sidebar({
  children,
  className,
}: PropsWithChildren<Props>) {
  return <aside className={clsx(styles.sidebar, className)}>{children}</aside>;
}

Sidebar.Section = SidebarSection;
