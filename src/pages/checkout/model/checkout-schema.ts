import z from "zod";
import {
  emailSchema,
  nameSchema,
  usTelephoneSchema,
} from "@/shared/model/schemas";
import { isPointWithinRadius } from "geolib";
import { DELIVERY_DISTANCE, SHOP_POSITION } from "@/shared/config";
import { milesToMeters } from "@/shared/lib";

export const checkoutSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    deliveryDate: z.date({ error: "Please select delivery date" }),
    deliveryTime: z.string({ error: "Please select delivery time" }),
    phone: usTelephoneSchema,
    notes: z.string().optional(),
    shippingNotes: z.string().optional(),
    shippingAddress: z.custom<google.maps.places.PlaceResult>(
      (val) => {
        return typeof val === "object" && val !== null;
      },
      { error: "Please select shipping address" },
    ),
    termsAccepted: z
      .boolean("You must accept the terms")
      .refine((accepted) => accepted === true, {
        error: "You must accept the terms",
      }),
  })
  .refine(
    ({ shippingAddress }) => {
      const lat = shippingAddress.geometry?.location?.lat();
      const lng = shippingAddress.geometry?.location?.lng();

      if (!lat || !lng) return;

      return isPointWithinRadius(
        SHOP_POSITION,
        { lat, lng },
        milesToMeters(DELIVERY_DISTANCE),
      );
    },
    {
      error: "Sorry, we’re not able to deliver to this location yet 💔",
      path: ["shippingAddress"],
      when(payload) {
        return checkoutSchema
          .pick({ shippingAddress: true })
          .safeParse(payload.value).success;
      },
    },
  );

export type CheckoutForm = z.infer<typeof checkoutSchema>;
