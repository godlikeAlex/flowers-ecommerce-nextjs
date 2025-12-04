import { EmptyState, PageBanner } from "@/shared/ui";
import { OrderCard } from "../OrderCard";
import { Order } from "@/entities/order";
import { getHistoryOrders } from "@/features/order";
import { ReceiptIcon } from "@phosphor-icons/react/dist/ssr/Receipt";
import { AccountDetailsSidebar } from "../AccountDetailsSidebar";

export default async function Account() {
  // const logoutMutation = useLogout();
  // const user = useUser();
  let orders: Order[] = [];

  try {
    const { data } = await getHistoryOrders();

    orders = data;
  } catch {
    console.log("Error while fetching orders");
  }

  return (
    <>
      <PageBanner title="Account" />

      <section className="py-80">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div className="col-md-8">
                  {orders.length > 0 ? (
                    <>
                      <h4 className="mb-4">Order History</h4>

                      {orders.map((order) => (
                        <OrderCard key={order.id} order={order} />
                      ))}
                    </>
                  ) : (
                    <EmptyState>
                      <EmptyState.Head>
                        <EmptyState.Image>
                          <ReceiptIcon size={200} weight="light" />
                        </EmptyState.Image>
                        <EmptyState.Heading>No orders yet</EmptyState.Heading>
                        <EmptyState.Description>
                          Your orders are empty for now. <br /> Explore our
                          fresh flowers and make someone’s day brighter!
                        </EmptyState.Description>
                      </EmptyState.Head>
                    </EmptyState>
                  )}
                </div>
                <div className="col-md-4">
                  <AccountDetailsSidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
