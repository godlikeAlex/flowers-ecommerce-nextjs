import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { PhoneIcon } from "@phosphor-icons/react/dist/ssr/Phone";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";

import { MenuItem } from "./Header";
import styles from "./Header.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

export default function MobileHeader({ isOpen, onClose, menuItems }: Props) {
  return (
    <div
      className={clsx(styles["mobile-nav__wrapper"], isOpen && styles.expanded)}
    >
      <div
        onClick={onClose}
        aria-hidden="true"
        className={clsx(
          styles["mobile-nav__overlay"],
          styles["mobile-nav__toggler"],
        )}
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
            {menuItems.map((menuItem) => (
              <li key={menuItem.label}>
                <Link href={menuItem.path}>{menuItem.label}</Link>

                {menuItem.items?.length && (
                  <ul className="sub-menu">
                    {menuItem.items.map((subMenuItem) => (
                      <li key={subMenuItem.label}>
                        <Link href="#">{subMenuItem.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
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
