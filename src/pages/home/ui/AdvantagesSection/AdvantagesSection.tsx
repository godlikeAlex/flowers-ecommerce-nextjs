import { Feature } from "@/shared/ui";

import deliveryIcon from "./icons/delivery.svg";
import wideVarietyIcon from "./icons/wide-variety.svg";
import personalTouchIcon from "./icons/personal-touch.svg";
import craftedWithCareIcon from "./icons/crafted-with-care.svg";

const features = [
  {
    title: "Delivery",
    text: "Fresh blooms brought straight to your doorstep — beautifully and on time.",
    icon: deliveryIcon,
  },
  {
    title: "Wide Variety",
    text: "A wide selection of bouquets for every style and moment.",
    icon: wideVarietyIcon,
  },
  {
    title: "Crafted with Care",
    text: "Each arrangement is made by florists who truly love their craft.",
    icon: craftedWithCareIcon,
  },
  {
    title: "Personal Touch",
    text: "We’re here to help you create the perfect floral surprise.",
    icon: personalTouchIcon,
  },
];

export default function AdvantagesSection() {
  return (
    <div className="container-fluid">
      <div className="row row-gap-4">
        {features.map((feature, index) => (
          <div key={index} className="col-xl-3 col-sm-6">
            <Feature
              title={feature.title}
              description={feature.text}
              icon={feature.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
