import Script from "next/script";

export default function InstagramReview() {
  return (
    <div className="container-fluid">
      <div className="heading text-center mb-48">
        <h2>
          <span className="color-primary">Follow</span> Us On Instagram
        </h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-9">
          <Script src="https://elfsightcdn.com/platform.js" async />
          <div
            className="elfsight-app-1bae447e-59e6-42cb-8a34-1162461e86ce"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </div>
  );
}
