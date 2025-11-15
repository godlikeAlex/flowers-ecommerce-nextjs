import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { PhoneIcon } from "@phosphor-icons/react/dist/ssr/Phone";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";

import { MenuSegment, StaticMenuItem } from "../Header";
import styles from "./MobileHeader.module.css";
import MobileMenuItem from "./MobileMenuItem";
import { CategoryMenu } from "@/entities/category";
import { ROUTES } from "@/shared/config";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  menuSegments: MenuSegment[];
}

export default function MobileHeader({ isOpen, onClose, menuSegments }: Props) {
  const renderStaticMenu = (menuItems: StaticMenuItem[]) => {
    return menuItems.map((menuItem) => (
      <MobileMenuItem
        key={menuItem.label}
        label={menuItem.label}
        path={menuItem.path}
        subMenuItems={menuItem.items}
        renderChildLabel={(childItem) => childItem.label}
        renderChildPath={(childItem) => childItem.path}
      />
    ));
  };

  const renderCategoriesMenu = (categories: CategoryMenu[]) => {
    return categories.map((category) => (
      <MobileMenuItem
        key={category.id}
        label={category.name}
        path={ROUTES.SHOP([category.slug])}
        subMenuItems={category.children}
        renderChildLabel={(childItem) => childItem.name}
        renderChildPath={(childItem) => childItem.slug}
        renderChildLink={(parentPath, targetPath) =>
          `${parentPath}/${targetPath}`
        }
      />
    ));
  };

  return (
    <div
      className={clsx(styles["mobile-nav__wrapper"], isOpen && styles.expanded)}
    >
      <div
        onClick={onClose}
        aria-hidden="true"
        className={clsx(styles["mobile-nav__overlay"])}
      />
      <div className={clsx(styles["mobile-nav__content"])}>
        <span
          className={clsx(
            styles["mobile-nav__close"],
            styles["mobile-nav__toggler"],
          )}
        />
        <div className={clsx(styles["logo-box"])}>
          <Link href="/">
            <Image
              src="/images/logo-width.svg"
              width={200}
              height={89}
              alt="BLUEMELLE Flower Boutique"
            />
          </Link>
        </div>
        <div className="mobile-nav__container">
          <ul className={styles["main-menu__list"]}>
            {menuSegments.map((segment) =>
              segment.type === "static"
                ? renderStaticMenu(segment.menuItems)
                : renderCategoriesMenu(segment.categories),
            )}
          </ul>
        </div>
        <ul className={clsx(styles["mobile-nav__contact"], "list-unstyled")}>
          <li>
            <span className={styles["footer-icon"]}>
              <EnvelopeSimpleIcon />
            </span>
            <a href="mailto:info@bluemelle.com">info@bluemelle.com</a>
          </li>
          <li>
            <span className={styles["footer-icon"]}>
              <PhoneIcon />
            </span>
            <a href="tel:+18483450492">+1 848-345-0492</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
