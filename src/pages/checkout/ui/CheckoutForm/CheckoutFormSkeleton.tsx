import Skeleton from "react-loading-skeleton";

export default function CheckoutFormSkeleton() {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <Skeleton height={55} />
        </div>
      </div>

      <div className="row mt-16">
        <div className="col-md-6">
          <Skeleton height={55} />
        </div>

        <div className="col-md-6">
          <Skeleton height={55} />
        </div>
      </div>

      <div className="row mt-16 mb-32">
        <div className="col-md-12">
          <Skeleton height={250} />
        </div>
      </div>

      <div className="row mt-16">
        <div className="col-md-6">
          <Skeleton height={55} />
        </div>

        <div className="col-md-6">
          <Skeleton height={55} />
        </div>
      </div>

      <div className="row mt-16 mb-32">
        <div className="col-md-12">
          <Skeleton height={250} />
        </div>
      </div>
    </>
  );
}
