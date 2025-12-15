import { MouseEvent, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr/CaretDown";

import styles from "./MobileHeader.module.css";

interface Props<T> {
  label: string;
  path: string;
  subMenuItems?: T[];
  renderChildPath: (target: T) => string;
  renderChildLabel: (target: T) => string;
  renderParentLink?: (targetPath: string) => string;
  renderChildLink?: (parentPath: string, targetPath: string) => string;
}

export default function MobileMenuItem<T>({
  label,
  path,
  renderChildLabel,
  renderChildPath,
  renderChildLink,
  subMenuItems = [],
}: Props<T>) {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const hasSubmenu = subMenuItems.length > 0;

  const handleToggleSubmenu = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowSubmenu((isOpen) => !isOpen);
  };

  return (
    <li>
      <div className={styles["row-menu-item"]}>
        <Link
          href={path}
          className={clsx(
            styles["root-menu-link"],
            showSubmenu && styles.expanded,
          )}
        >
          {label}
        </Link>

        {hasSubmenu && (
          <button
            aria-label="dropdown toggler"
            className={clsx(
              styles["open-submenu-button"],
              showSubmenu && styles.expanded,
            )}
            onClick={handleToggleSubmenu}
          >
            <CaretDownIcon />
          </button>
        )}
      </div>

      {hasSubmenu && (
        <ul
          className="sub-menu"
          style={{ display: showSubmenu ? "block" : "none" }}
        >
          {subMenuItems.map((subMenuItem) => {
            const childLabel = renderChildLabel(subMenuItem);
            const childPath = renderChildPath(subMenuItem);

            return (
              <li key={childLabel}>
                <Link
                  href={
                    renderChildLink
                      ? renderChildLink(path, childPath)
                      : childPath
                  }
                >
                  {childLabel}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
