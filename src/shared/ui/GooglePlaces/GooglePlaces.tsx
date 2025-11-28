"use client";

import { usePlacesWidget } from "react-google-autocomplete";
import { Input } from "../Input";

import "./style.css";

type InputProps = Omit<
  React.ComponentProps<typeof Input>,
  "value" | "onSelect" | "onChange"
>;

interface Props extends InputProps {
  onSelect: (place: google.maps.places.PlaceResult) => void;
}

export default function GooglePlaces({ onSelect, ...props }: Props) {
  const { ref } = usePlacesWidget({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    onPlaceSelected: onSelect,
    options: {
      componentRestrictions: { country: "us" },
      types: ["address"],
      bounds: {
        north: 41.357858,
        south: 38.788656,
        east: -73.89455,
        west: -75.559614,
      },
      strictBounds: true,
    },
  });

  return <Input ref={ref} {...props} />;
}
