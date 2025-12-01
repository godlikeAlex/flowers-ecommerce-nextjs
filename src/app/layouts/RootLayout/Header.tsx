"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { ShoppingCartSimpleIcon } from "@phosphor-icons/react/dist/ssr/ShoppingCartSimple";
import { UserIcon } from "@phosphor-icons/react/dist/ssr/User";
import { HandPointingIcon } from "@phosphor-icons/react/dist/ssr/HandPointing";
import { ListIcon } from "@phosphor-icons/react/dist/ssr/List";

import { ROUTES } from "@/shared/config";
import { Button, IconButton } from "@/shared/ui";

import styles from "./Header.module.css";
import { MobileHeader } from "./MobileHeader";
import { CategoryMenu } from "@/entities/category";
import HeaderMenuItem from "./HeaderMenuItem";

export interface StaticMenuItem {
  label: string;
  path: string;
  items?: StaticMenuItem[];
}

const START_MENU_ITEMS: StaticMenuItem[] = [
  { label: "Home", path: ROUTES.HOME },
];

const END_MENU_ITEMS: StaticMenuItem[] = [];

export type MenuSegment =
  | { type: "static"; menuItems: StaticMenuItem[] }
  | { type: "category"; categories: CategoryMenu[] };

interface Props {
  categories: CategoryMenu[];
}

export default function Header({ categories }: Props) {
  const [mobileMenuIsOpen, setMobileIsOpen] = useState(false);

  const menuSegments: MenuSegment[] = [
    { type: "static", menuItems: START_MENU_ITEMS },
    {
      type: "category",
      categories: categories.map((category) => ({
        ...category,
      })),
    },
    { type: "static", menuItems: END_MENU_ITEMS },
  ];

  const renderStaticMenuItem = (menuItems: StaticMenuItem[]) => {
    return menuItems.map((menuItem) => (
      <HeaderMenuItem
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
      <HeaderMenuItem
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
    <>
      <header>
        <nav className={clsx(styles["main-menu"])}>
          <div className="container-fluid">
            <div className={clsx(styles["main-menu__block"])}>
              <div className={clsx(styles["main-menu__left"])}>
                <div className={clsx(styles["main-menu__logo"])}>
                  <Link href={ROUTES.HOME} className={clsx(styles.logo)}>
                    <Image
                      loading="eager"
                      src="/images/logo.webp"
                      width={90}
                      height={90}
                      alt="BLUEMELLE Flower Boutique"
                    />
                  </Link>
                </div>
                <div className={clsx(styles["main-menu__nav"])}>
                  <ul className={clsx(styles["main-menu__list"])}>
                    {menuSegments.map((segment) =>
                      segment.type === "static"
                        ? renderStaticMenuItem(segment.menuItems)
                        : renderCategoriesMenu(segment.categories),
                    )}
                  </ul>
                </div>
              </div>
              <div className={clsx(styles["main-menu__right"])}>
                <IconButton
                  variant="outline"
                  className={clsx("d-xl-flex d-none")}
                  as={Link}
                  href={ROUTES.SIGNIN}
                  icon={<UserIcon width={20} height={20} />}
                />
                <IconButton
                  variant="outline"
                  className={clsx("d-xl-flex d-none")}
                  as={Link}
                  href={ROUTES.CART}
                  icon={<ShoppingCartSimpleIcon width={20} height={20} />}
                />
                <Button
                  variant="ghost"
                  className={clsx("d-xl-flex d-none")}
                  as={Link}
                  href={ROUTES.HOME}
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
        menuSegments={menuSegments}
        isOpen={mobileMenuIsOpen}
        onClose={() => setMobileIsOpen(false)}
      />
    </>
  );
}
