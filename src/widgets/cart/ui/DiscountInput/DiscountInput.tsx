"use client";

import { FormEvent, useRef, useState } from "react";

import { Input, Button, IconButton, InputErrorMessage } from "@/shared/ui";
import { SealPercentIcon } from "@phosphor-icons/react/dist/ssr/SealPercent";
import { useApplyDiscount, useCancelDiscount } from "@/features/cart";

import { isLaravelValidationError } from "@/shared/lib";
import { useCart } from "@/entities/cart";
import { TrashSimpleIcon } from "@phosphor-icons/react/dist/ssr/TrashSimple";

import styles from "./DiscountInput.module.css";

export default function DiscountInput() {
  const discountInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>();

  const cart = useCart();

  const applyDiscount = useApplyDiscount();
  const cancelDiscount = useCancelDiscount();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!discountInputRef.current || cart.data?.discount_code) return;

    setError(undefined);

    try {
      await applyDiscount.mutateAsync(discountInputRef.current.value);
    } catch (e) {
      if (isLaravelValidationError(e)) {
        setError(e.response.data.message);
      }
    }
  };

  const handleCancelDiscount = () => {
    if (!cart.data?.discount_code) return;

    cancelDiscount.mutate();

    if (discountInputRef.current) {
      discountInputRef.current.value = "";
    }
  };

  if (!cart.data) return;

  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <Input
          ref={discountInputRef}
          placeholder="Discount Code"
          disabled={applyDiscount.isPending || Boolean(cart.data.discount_code)}
          className={styles.input}
          defaultValue={cart.data.discount_code ?? ""}
          style={cart.data.discount_code ? { color: "green" } : undefined}
        />

        <Button
          style={{ padding: 0 }}
          variant="ghost"
          status={cart.data.discount_code ? "danger" : "success"}
          classNameWrapper={styles.button}
          accessoryRight={
            cart.data.discount_code ? <TrashSimpleIcon /> : <SealPercentIcon />
          }
          disabled={applyDiscount.isPending || cancelDiscount.isPending}
          onClick={handleCancelDiscount}
        >
          {cart.data.discount_code ? "Cancel" : "Apply"}
        </Button>
      </form>

      {error && (
        <InputErrorMessage style={{ marginTop: 8 }}>{error}</InputErrorMessage>
      )}
    </div>
  );
}
