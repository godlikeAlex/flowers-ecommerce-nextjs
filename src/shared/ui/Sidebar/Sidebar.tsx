import { PropsWithChildren } from "react";
import SidebarSection from "./SidebarSection";
import styles from "./Sidebar.module.css";

export default function Sidebar({ children }: PropsWithChildren) {
  return <aside className={styles.sidebar}>{children}</aside>;
}

Sidebar.Section = SidebarSection;
