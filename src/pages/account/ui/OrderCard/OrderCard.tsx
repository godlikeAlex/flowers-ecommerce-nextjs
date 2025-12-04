import clsx from "clsx";
import styles from "./OrderCard.module.css";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { ReceiptIcon } from "@phosphor-icons/react/dist/ssr/Receipt";
import { CaretUpIcon } from "@phosphor-icons/react/dist/ssr/CaretUp";
import OrderItem from "./OrderItem";
import { Anchor } from "@/shared/ui";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { Order } from "@/entities/order";
import { formatNYTime, formatPrice, utcToNY } from "@/shared/lib";

interface Props {
  order: Order;
}

export default function OrderCard({ order }: Props) {
  return (
    <div className={styles["order-item"]} style={{ marginBottom: 25 }}>
      <div className={styles["order-item-panel-title"]}>
        <h2>
          Order UUID{" "}
          <strong style={{ textTransform: "uppercase" }}>{order.uuid}</strong>
        </h2>

        <hr className="dash-line" />
      </div>

      <div className={styles["order-item-content"]}>
        <div className="row mb-2">
          <div className={clsx("col-md-3 col-6", styles["order-item-title"])}>
            Status:
          </div>
          <div className={clsx("col-md-9 col-6", styles["order-item-value"])}>
            {order.status}
          </div>
        </div>

        <div className="row mb-2">
          <div className={clsx("col-md-3 col-6", styles["order-item-title"])}>
            Delivery Date:
          </div>
          <div className={clsx("col-md-9 col-6", styles["order-item-value"])}>
            {formatNYTime(order.delivery_at)}
            <br /> <small>NYC time</small>
          </div>
        </div>

        <div className="row mb-2">
          <div className={clsx("col-md-3 col-6", styles["order-item-title"])}>
            Address:
          </div>
          <div className={clsx("col-md-9 col-6", styles["order-item-value"])}>
            {order.address}
          </div>
        </div>

        <div className="row mb-2">
          <div className={clsx("col-md-3 col-6", styles["order-item-title"])}>
            Total:
          </div>
          <div className={clsx("col-md-9 col-6", styles["order-item-value"])}>
            {formatPrice(order.total_amount)}
          </div>
        </div>

        {order.receipt_url && (
          <div className="row mb-2">
            <div className={clsx("col-md-3 col-6", styles["order-item-title"])}>
              Receipt:
            </div>
            <div className={clsx("col-md-9 col-6", styles["order-item-value"])}>
              <Anchor target="_blank" href={order.receipt_url}>
                <ArrowUpRightIcon /> Open Receipt
              </Anchor>
            </div>
          </div>
        )}
      </div>

      <hr className="dash-line" />

      <Disclosure>
        <DisclosureButton className={styles["accordion-button"]}>
          {order.order_items.length} Order items
          <CaretUpIcon width={20} height={20} />
        </DisclosureButton>
        <DisclosurePanel className="text-gray-500">
          <hr className="dash-line" />

          <div className="d-flex flex-column row-gap-3 py-3">
            {order.order_items.map((orderItem) => (
              <OrderItem key={orderItem.id} orderItem={orderItem} />
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
