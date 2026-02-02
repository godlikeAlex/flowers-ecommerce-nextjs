"use client";

import { ElfsightWidget } from "react-elfsight-widget";

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
          <ElfsightWidget
            widgetId="2028a0b5-0429-49c2-90af-be815371c4e2"
            lazy
          />
        </div>
      </div>
    </div>
  );
}
