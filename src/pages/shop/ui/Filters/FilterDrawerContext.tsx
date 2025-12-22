"use client";

import { createContext, useContext, useState } from "react";

const FilterDrawerContext = createContext<{
  isOpen: boolean;
  open: () => void;
  close: () => void;
} | null>(null);

export function FilterDrawerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FilterDrawerContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </FilterDrawerContext.Provider>
  );
}

export function useFilterDrawer() {
  const context = useContext(FilterDrawerContext);

  if (!context) {
    throw new Error("useFilterDrawer must be used within FilterDrawerProvider");
  }

  return context;
}
