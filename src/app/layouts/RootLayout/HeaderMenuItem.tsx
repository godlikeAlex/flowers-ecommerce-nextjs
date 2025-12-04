import Link from "next/link";
import clsx from "clsx";
import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr/CaretRight";

import styles from "./Header.module.css";

interface Props<T> {
  label: string;
  path: string;
  isActive?: boolean;
  subMenuItems?: T[];
  renderChildPath: (target: T) => string;
  renderChildLabel: (target: T) => string;
  renderParentLink?: (targetPath: string) => string;
  renderChildLink?: (parentPath: string, targetPath: string) => string;
}

export default function HeaderMenuItem<T>({
  label,
  path,
  renderChildLabel,
  renderChildPath,
  renderChildLink,
  subMenuItems = [],
  isActive = false,
}: Props<T>) {
  return (
    <li>
      <Link className={clsx(isActive && styles.active)} href={path}>
        {label}
      </Link>

      {subMenuItems.length > 0 && (
        <ul className="sub-menu">
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

                  <CaretRightIcon className={clsx(styles["arrow-right"])} />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
