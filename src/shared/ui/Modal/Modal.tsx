import { PropsWithChildren } from "react";
import { Dialog } from "@headlessui/react";

import clsx from "clsx";

import classes from "./Modal.module.css";
import { XCircleIcon } from "@phosphor-icons/react/dist/ssr/XCircle";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  customClasses?: {
    root?: string;
    modal?: string;
    backDrop?: string;
    contentWrapper?: string;
    content?: string;
  };
}

export default function Modal({
  isOpen,
  onClose,
  customClasses,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Dialog
      className={clsx(classes["modal-root"], customClasses?.root)}
      open={isOpen}
      onClose={onClose}
    >
      <div
        className={clsx(classes.modalBackdrop, customClasses?.backDrop)}
      ></div>

      <div className={clsx(classes.modal, customClasses?.modal)}>
        <div
          className={clsx(
            classes["content-wrapper"],
            customClasses?.contentWrapper,
          )}
        >
          <Dialog.Panel
            className={clsx(classes.content, customClasses?.content)}
          >
            <button className={classes["close-button"]} onClick={onClose}>
              <XCircleIcon />
            </button>
            {children}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
