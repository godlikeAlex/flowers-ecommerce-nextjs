import { OrderItem as OrderItemType } from "@/entities/order";
import styles from "./OrderCard.module.css";
import { formatPrice } from "@/shared/lib";
import Image from "next/image";

interface Props {
  orderItem: OrderItemType;
}

export default function OrderItem({ orderItem }: Props) {
  return (
    <div className={styles["order-item-card"]}>
      <div className="row">
        <div className="col-md-7">
          <div className="d-flex">
            <Image
              src={orderItem.cover ?? ""}
              width={95}
              height={95}
              alt={orderItem.product_name}
              className={styles.image}
              style={{
                objectFit: "cover",
                flexShrink: 0,
                height: 95,
                width: 95,
              }}
            />

            <div className="mx-2">
              <h6>{orderItem.product_name}</h6>
              <p>Quantity: {orderItem.quantity}</p>
              <h6 className="color-primary d-block d-lg-none">
                {formatPrice(orderItem.total)}
              </h6>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="d-flex justify-content-end">
            <h6 className="color-primary d-none d-lg-block">
              {formatPrice(orderItem.total)}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
