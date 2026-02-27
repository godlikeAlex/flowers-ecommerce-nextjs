"use client";

import { type ComponentType, useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import classNames from "./SocialFixedButtons.module.css";
import googleMapIcon from "./google-map.svg";

import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { PhoneCallIcon } from "@phosphor-icons/react/dist/ssr/PhoneCall";

const GoogleMapIcon: ComponentType = () => (
  <Image
    src={googleMapIcon}
    alt="Our location"
    unoptimized
    width={32}
    height={32}
  />
);

const socialButtons: Array<{
  text: string;
  link: string;
  icon: ComponentType;
}> = [
  {
    text: "Instagram",
    link: "https://www.instagram.com/bluemelle_flowers_nj/",
    icon: InstagramLogoIcon,
  },
  {
    text: "WhatsApps",
    link: "https://api.whatsapp.com/send?phone=18483450492",
    icon: WhatsappLogoIcon,
  },
  {
    text: "+1 848-345-0492",
    link: "tel:+18483450492",
    icon: PhoneCallIcon,
  },
  {
    text: "Our Location",
    link: "https://maps.app.goo.gl/QXWxdJwzar1QxVHm7",
    icon: GoogleMapIcon,
  },
];

export default function SocialFixedButtons() {
  return (
    <ul className={clsx(classNames["social-fixed-btns"])}>
      {socialButtons.map((button, index) => {
        const Icon = button.icon;

        return (
          <li key={button.link}>
            <a href={button.link} target="_blank" rel="noopener noreferrer">
              <div className={clsx(classNames["icon-box"])}>
                <Icon />
              </div>
              <span>{button.text}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
