import Script from "next/script";

export default function GoogleReview() {
  return (
    <div className="container-fluid">
      <div className="heading text-center mb-48">
        <h2>
          Words from <span className="color-primary">Our Clients</span>
        </h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-9">
          <Script src="https://elfsightcdn.com/platform.js" async />
          <div
            className="elfsight-app-2028a0b5-0429-49c2-90af-be815371c4e2"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </div>
  );
}
