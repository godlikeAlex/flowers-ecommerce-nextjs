"use client";

import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { TelegramLogoIcon } from "@phosphor-icons/react/dist/ssr/TelegramLogo";
import { FacebookLogoIcon } from "@phosphor-icons/react/dist/ssr/FacebookLogo";
import {
  FacebookIcon,
  FacebookShareButton,
  EmailIcon,
  EmailShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  PinterestShareButton,
} from "react-share";
import styles from "./ShareButtons.module.css";
import clsx from "clsx";

export default function ShareButtons() {
  const url = "https://google.com";

  return (
    <div className={styles["share-container"]}>
      <EmailShareButton url={url}>
        <div className={styles.button}>
          <EnvelopeSimpleIcon />
        </div>
      </EmailShareButton>

      <WhatsappShareButton url={url}>
        <div className={clsx(styles.button, styles["button--wa"])}>
          <WhatsappLogoIcon />
        </div>
      </WhatsappShareButton>

      <FacebookShareButton url={url}>
        <div className={clsx(styles.button, styles["button--fb"])}>
          <FacebookLogoIcon />
        </div>
      </FacebookShareButton>

      <TelegramShareButton url={url}>
        <div className={clsx(styles.button, styles["button--tg"])}>
          <TelegramLogoIcon />
        </div>
      </TelegramShareButton>
    </div>
  );
}
