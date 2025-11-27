import {
  useAddCartItemAddon,
  useAddToCart,
  useDeleteCartItem,
  useDeleteCartItemAddon,
  useSetQuantity,
} from "@/features/cart";
import { useProductInCart } from "@/features/product";
import { useProductSelection } from "./product-selection-context";
import { ProductAddon, ProductOption, selectAddonID } from "@/entities/product";
import { executeByProductContext } from "../lib/execute-by-product-context";

interface ProductState {
  quantity: number;
  selectedOption: ProductOption;
  selectedAddons: ProductAddon[];
  productStatus: "EDIT" | "ADD";
}

type QuantitySetter = number | ((quantity: number) => number);

export function useProductCart() {
  const localProduct = useProductSelection();
  const productInCart = useProductInCart({
    productOptionID: localProduct.selectedOption.id,
  });

  const addToCartMutation = useAddToCart();
  const setQuantityMutation = useSetQuantity();
  const deleteCartItemMutation = useDeleteCartItem();

  const addAddonToCartMutation = useAddCartItemAddon();
  const deleteCartItemAddonMutation = useDeleteCartItemAddon();

  const productState = executeByProductContext<ProductState>(
    productInCart.cartItem,
    {
      ADD: () => ({
        quantity: localProduct.quantity,
        selectedOption: localProduct.selectedOption,
        selectedAddons: localProduct.selectedAddons,
        productStatus: "ADD",
      }),
      EDIT: (cartItem) => ({
        quantity: cartItem.quantity,
        selectedOption: localProduct.selectedOption,
        selectedAddons: cartItem.addons,
        productStatus: "EDIT",
      }),
    },
  );

  const addToCart = async () => {
    const addonsOptionIDS = localProduct.selectedAddons
      .map(selectAddonID)
      .filter((id) => id !== undefined);

    await addToCartMutation.mutateAsync({
      option_id: localProduct.selectedOption.id,
      quantity: localProduct.quantity,
      addons: addonsOptionIDS,
    });

    localProduct.removeAllAddons();
    localProduct.setQuantity(1);
  };

  const deleteCartItem = () => {
    deleteCartItemMutation.mutate(localProduct.selectedOption.id);
    setLocalQuantity(1);
    localProduct.removeAllAddons();
  };

  const setLocalQuantity = (quantitySetter: QuantitySetter) => {
    if (typeof quantitySetter === "function") {
      localProduct.setQuantity(quantitySetter(productState.quantity));
    } else {
      localProduct.setQuantity(quantitySetter);
    }
  };

  const setServerQuantity = (quantitySetter: QuantitySetter) => {
    if (typeof quantitySetter === "function") {
      setQuantityMutation.mutate({
        option_id: localProduct.selectedOption.id,
        quantity: quantitySetter(productState.quantity),
      });
    } else {
      setQuantityMutation.mutate({
        option_id: localProduct.selectedOption.id,
        quantity: quantitySetter,
      });
    }
  };

  const setQuantity = (quantitySetter: QuantitySetter) =>
    executeByProductContext(productInCart.cartItem, {
      ADD: () => setLocalQuantity(quantitySetter),
      EDIT: () => setServerQuantity(quantitySetter),
    });

  const removeAddon = (addon: ProductAddon) => {
    executeByProductContext(productInCart.cartItem, {
      ADD: () => {
        localProduct.removeAddon(addon.id);
      },
      EDIT: () => {
        const addonID = selectAddonID(addon);

        if (!addonID) return;

        deleteCartItemAddonMutation.mutate({
          addon_id: addonID,
          option_id: localProduct.selectedOption.id,
        });
      },
    });
  };

  const addAddon = (addon: ProductAddon) => {
    executeByProductContext(productInCart.cartItem, {
      ADD: () => {
        localProduct.selectAddon(addon);
      },
      EDIT: () => {
        const addonID = selectAddonID(addon);

        if (!addonID) return;

        addAddonToCartMutation.mutate({
          addon_id: addonID,
          option_id: localProduct.selectedOption.id,
        });
      },
    });
  };

  return {
    selectOption: localProduct.selectOption,
    addToCart,
    setQuantity,
    setLocalQuantity,
    setServerQuantity,
    productState,
    deleteCartItem,
    addAddon,
    removeAddon,
    quantityIsDisabled:
      addToCartMutation.isPending || setQuantityMutation.isPending,
    addonIsDisabled:
      addAddonToCartMutation.isPending || deleteCartItemAddonMutation.isPending,
  };
}
