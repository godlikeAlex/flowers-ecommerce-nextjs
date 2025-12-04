import { Feature } from "@/shared/ui";

import { TruckIcon } from "@phosphor-icons/react/dist/ssr/Truck";
import { FlowerTulipIcon } from "@phosphor-icons/react/dist/ssr/FlowerTulip";
import { HandHeartIcon } from "@phosphor-icons/react/dist/ssr/HandHeart";
import { ChatCircleDotsIcon } from "@phosphor-icons/react/dist/ssr/ChatCircleDots";

const features = [
  {
    title: "Free Delivery",
    text: "Fresh blooms delivered right to your doorstep — no extra fees.",
    icon: TruckIcon,
  },
  {
    title: "Wide Variety",
    text: "Fresh blooms delivered right to your doorstep — no extra fees.",
    icon: FlowerTulipIcon,
  },
  {
    title: "Crafted with Care",
    text: "Each arrangement is made by florists who truly love their craft.",
    icon: HandHeartIcon,
  },
  {
    title: "Personal Touch",
    text: "We’re here to help you create the perfect floral surprise.",
    icon: ChatCircleDotsIcon,
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
