"use client";

import { ProductAddon, ProductOption } from "@/entities/product";
import { createContext, PropsWithChildren, useContext, useState } from "react";

interface ProductSelectionState {
  selectedAddons: ProductAddon[];
  selectedOption: ProductOption;
  quantity: number;

  selectOption: (option: ProductOption) => void;
  selectAddon: (addon: ProductAddon) => void;
  setQuantity: (quantity: number) => void;
  removeAddon: (id: number) => void;
  removeAllAddons: () => void;
}

const ProductSelectionContext = createContext<ProductSelectionState | null>(
  null,
);

export function useProductSelection() {
  const context = useContext(ProductSelectionContext);

  if (!context) {
    throw new Error(
      "useProductSelection must be used within a ProductSelectionProvider",
    );
  }

  return context;
}

export function ProductSelectionProvider({
  children,
  selectedOption,
}: PropsWithChildren<{ selectedOption: ProductOption }>) {
  const [state, setState] = useState<
    Pick<
      ProductSelectionState,
      "selectedOption" | "selectedAddons" | "quantity"
    >
  >({
    selectedOption,
    selectedAddons: [],
    quantity: 1,
  });

  const selectOption = (option: ProductOption) => {
    setState((currentState) => ({ ...currentState, selectedOption: option }));
  };

  const selectAddon = (addon: ProductAddon) => {
    setState((currentState) => ({
      ...currentState,
      selectedAddons: [...currentState.selectedAddons, addon],
    }));
  };

  const removeAddon = (id: number) => {
    setState((currentState) => ({
      ...currentState,
      selectedAddons: currentState.selectedAddons.filter(
        (addon) => addon.id !== id,
      ),
    }));
  };

  const removeAllAddons = () => {
    setState((currentState) => ({
      ...currentState,
      selectedAddons: [],
    }));
  };

  const setQuantity = (quantity: number) => {
    setState((currentState) => ({
      ...currentState,
      quantity,
    }));
  };

  return (
    <ProductSelectionContext.Provider
      value={{
        selectAddon,
        removeAddon,
        selectOption,
        selectedAddons: state.selectedAddons,
        selectedOption: state.selectedOption,
        quantity: state.quantity,
        removeAllAddons,
        setQuantity,
      }}
    >
      {children}
    </ProductSelectionContext.Provider>
  );
}
