export function formatPrice(amount: number, amountInCents: boolean = true) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amountInCents ? amount / 100 : amount);
}
