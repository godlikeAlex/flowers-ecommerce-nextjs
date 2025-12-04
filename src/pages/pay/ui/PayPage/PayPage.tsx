import Image from "next/image";
import { SquarePaymentCard } from "../SquarePaymentCard";

import paymentImage from "./payment.png";

import styles from "./PayPage.module.css";
import { getOrderPayStatus } from "@/features/order";
import { OrderPay } from "@/entities/order";
import { formatPrice } from "@/shared/lib";
import { EmptyState } from "@/shared/ui";
import { notFound } from "next/navigation";

export default async function PayPage({
  params,
}: {
  params: Promise<{ orderUUID: string }>;
}) {
  const orderUUID = (await params).orderUUID;
  let order: OrderPay | null = null;

  try {
    const { data } = await getOrderPayStatus(orderUUID);

    if (data.status === "pending") {
      order = data;
    }
  } catch {
    return notFound();
  }

  if (!order) {
    return (
      <section className="py-80">
        <div className="container">
          <div className="col-md-8 mx-auto">
            <EmptyState>
              <EmptyState.Head>
                <EmptyState.Image>
                  <Image src={paymentImage} priority alt="" />
                </EmptyState.Image>

                <EmptyState.Heading>
                  Payment has already been completed 🎉
                </EmptyState.Heading>
                <EmptyState.Description>
                  This order is marked as paid. No further payments can be made.
                  💙
                </EmptyState.Description>
              </EmptyState.Head>
            </EmptyState>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-3 py-md-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className={styles.check}>
              <header className="mb-32 text-center">
                <Image
                  src="/images/logo.webp"
                  width={120}
                  height={120}
                  alt="BLUEMELLE Flower Boutique"
                  className="text-center"
                />

                <h5 className="mt-2">Payment Details</h5>
              </header>

              <ul className="unstyled">
                {order.order_items.map((orderItem) => (
                  <li
                    key={orderItem.id}
                    className="d-flex gap-2 justify-content-between py-1 accent-dark"
                  >
                    <span>
                      {orderItem.product_name} x {orderItem.quantity}
                    </span>

                    <span className="bold-text color-primary">
                      {formatPrice(orderItem.total)}
                    </span>
                  </li>
                ))}
              </ul>

              <hr className="my-2 dash-line" />

              <ul className="unstyled">
                <li className="d-flex gap-2 justify-content-between py-1 accent-dark">
                  <span className="bold-text">Subtotal</span>

                  <span className="bold-text color-primary">
                    {formatPrice(order.subtotal_amount)}
                  </span>
                </li>

                {order.discount_amount > 0 && (
                  <li className="d-flex gap-2 justify-content-between py-1 accent-dark">
                    <span className="bold-text">Discount</span>

                    <span className="bold-text color-primary">
                      {formatPrice(order.discount_amount)}
                    </span>
                  </li>
                )}

                <li className="d-flex gap-2 justify-content-between py-1 accent-dark">
                  <span className="bold-text">Shipping</span>

                  <span className="bold-text color-primary">0$</span>
                </li>

                <hr className="my-2 dash-line" />

                <li className="d-flex gap-2 justify-content-between py-1 accent-dark">
                  <h6 className="bold-text color-primary">TOTAL</h6>

                  <h6 className="bold-text color-primary">
                    {formatPrice(order.total_amount)}
                  </h6>
                </li>
              </ul>
            </div>

            <div className="mt-5">
              <SquarePaymentCard orderForPay={order} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
