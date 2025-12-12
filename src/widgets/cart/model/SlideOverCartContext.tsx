"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SlideOverCartContextProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const SlideOverCartContext = createContext<
  SlideOverCartContextProps | undefined
>(undefined);

export const SlideOverCartProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <SlideOverCartContext.Provider value={{ open, close, isOpen }}>
      {children}
    </SlideOverCartContext.Provider>
  );
};

export const useSlideOverCart = () => {
  const context = useContext(SlideOverCartContext);

  if (!context)
    throw new Error(
      "useSlideOverCart must be used within SlideOverCartProvider",
    );

  return context;
};
