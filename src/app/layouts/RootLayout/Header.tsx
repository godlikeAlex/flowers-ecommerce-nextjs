"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { ShoppingCartSimpleIcon } from "@phosphor-icons/react/dist/ssr/ShoppingCartSimple";
import { UserIcon } from "@phosphor-icons/react/dist/ssr/User";
import { HandPointingIcon } from "@phosphor-icons/react/dist/ssr/HandPointing";
import { ListIcon } from "@phosphor-icons/react/dist/ssr/List";
import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr/CaretRight";

import { ROUTES } from "@/shared/config";
import { Button, IconButton } from "@/shared/ui";

import styles from "./Header.module.css";
import MobileHeader from "./MobileHeader";
import { useState } from "react";

export interface MenuItem {
  label: string;
  path: string;
  items?: MenuItem[];
}

const DEFAULT_MENU: MenuItem[] = [
  { label: "Home", path: ROUTES.HOME },
  {
    label: "Gifts",
    path: ROUTES.HOME,
    items: [
      { label: "Bouquets", path: ROUTES.HOME },
      { label: "Plants in Pots", path: ROUTES.HOME },
      { label: "Gift Sets", path: ROUTES.HOME },
      { label: "Greeting Cards", path: ROUTES.HOME },
    ],
  },
  {
    label: "Seasonal Flowers",
    path: ROUTES.HOME,
    items: [
      { label: "Spring Flowers", path: ROUTES.HOME },
      { label: "Summer Flowers", path: ROUTES.HOME },
      { label: "Autumn Flowers", path: ROUTES.HOME },
      { label: "Winter Flowers", path: ROUTES.HOME },
    ],
  },
  {
    label: "Occasions",
    path: ROUTES.HOME,
    items: [
      { label: "Birthday", path: ROUTES.HOME },
      { label: "Wedding", path: ROUTES.HOME },
      { label: "Anniversary", path: ROUTES.HOME },
      { label: "Sympathy", path: ROUTES.HOME },
    ],
  },
  { label: "Contacts", path: ROUTES.HOME },
];

export default function Header() {
  const [mobileMenuIsOpen, setMobileIsOpen] = useState(false);

  return (
    <>
      <header>
        <nav className={clsx(styles["main-menu"])}>
          <div className="container-fluid">
            <div className={clsx(styles["main-menu__block"])}>
              <div className={clsx(styles["main-menu__left"])}>
                <div className={clsx(styles["main-menu__logo"])}>
                  <Link href={ROUTES.HOME} className={clsx(styles.logo)}>
                    <Image
                      src="/images/logo-width.svg"
                      width={195}
                      height={89}
                      alt="BLUEMELLE Flower Boutique"
                    />
                  </Link>
                </div>
                <div className={clsx(styles["main-menu__nav"])}>
                  <ul className={clsx(styles["main-menu__list"])}>
                    {DEFAULT_MENU.map((menuItem) => (
                      <li key={menuItem.label}>
                        <Link
                          href={menuItem.path}
                          // className={clsx(styles["active"])}
                        >
                          {menuItem.label}
                        </Link>

                        {menuItem.items?.length && (
                          <ul className="sub-menu">
                            {menuItem.items.map((subMenuItem) => (
                              <li key={subMenuItem.label}>
                                <Link href="#">
                                  {subMenuItem.label}
                                  <CaretRightIcon
                                    className={clsx(styles["arrow-right"])}
                                  />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* {menuItem.items?.map(subMenu => ())} */}

                        {/* <ul className="sub-menu">
                  
                        </ul> */}
                      </li>
                    ))}

                    {/* <li className="dropdown">
                      <Link href="#">Shop</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="#">
                            Roses
                            <CaretRightIcon
                              className={clsx(styles["arrow-right"])}
                            />
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/">About us</Link>
                    </li>
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className={clsx(styles["main-menu__right"])}>
                <IconButton
                  variant="outline"
                  className={clsx("d-xl-flex d-none")}
                  icon={<UserIcon width={20} height={20} />}
                />
                <IconButton
                  variant="outline"
                  className={clsx("d-xl-flex d-none")}
                  icon={<ShoppingCartSimpleIcon width={20} height={20} />}
                />
                <Button
                  variant="ghost"
                  className={clsx("d-xl-flex d-none")}
                  as={Link}
                  href="/contact"
                  accessoryRight={<HandPointingIcon width={20} height={20} />}
                >
                  Contact Us
                </Button>
                <button
                  onClick={() => setMobileIsOpen(true)}
                  className={clsx(styles["mobile-nav__toggler"])}
                >
                  <ListIcon />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <MobileHeader
        menuItems={DEFAULT_MENU}
        isOpen={mobileMenuIsOpen}
        onClose={() => setMobileIsOpen(false)}
      />
    </>
  );
}
