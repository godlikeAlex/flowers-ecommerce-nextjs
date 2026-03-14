export function getZipCode(place: google.maps.places.PlaceResult) {
  const postal = place.address_components?.find((c) =>
    c.types.includes("postal_code"),
  )?.long_name;

  return postal?.trim().split("-")[0] ?? null;
}
