import { Input } from "@/shared/ui";
import styles from "./SidebarFilters.module.css";

export default function SidebarFilters() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles["sidebar-widget"]}>
        <Input placeholder="Search here..." />
      </div>
    </aside>
  );
}
