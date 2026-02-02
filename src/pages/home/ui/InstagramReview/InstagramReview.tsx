"use client";

import { ElfsightWidget } from "react-elfsight-widget";

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
          <ElfsightWidget
            widgetId="1bae447e-59e6-42cb-8a34-1162461e86ce"
            lazy
          />
        </div>
      </div>
    </div>
  );
}
