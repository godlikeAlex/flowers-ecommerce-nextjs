"use client";

import clsx from "clsx";
import classNames from "./SocialFixedButtonsMobile.module.css";

import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { PhoneCallIcon } from "@phosphor-icons/react/dist/ssr/PhoneCall";

const socialButtonsMobile = [
  {
    text: "Call Us",
    link: "tel:+18483450492",
    icon: <PhoneCallIcon />,
  },
  {
    text: "WhatsApp",
    link: "https://api.whatsapp.com/send?phone=18483450492",
    icon: <WhatsappLogoIcon />,
  },
  {
    text: "Instagram",
    link: "https://www.instagram.com/bluemelle_flowers_nj/",
    icon: <InstagramLogoIcon />,
  },
];

type SocialFixedButtonsMobileProps = {
  className?: string;
};

export default function SocialFixedButtonsMobile({
  className,
}: SocialFixedButtonsMobileProps) {
  return (
    <ul className={clsx(classNames["social-fixed-btns-mobile"], className)}>
      {socialButtonsMobile.map((item) => (
        <li key={`${item.text}-${item.link}`}>
          <a href={item.link} target={"_blank"} rel={"noopener noreferrer"}>
            <span className={classNames["icon-box"]}>{item.icon}</span>
            <span className={classNames["text"]}>{item.text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
