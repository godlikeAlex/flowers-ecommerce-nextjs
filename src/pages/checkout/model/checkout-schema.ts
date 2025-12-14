import z from "zod";
import {
  emailSchema,
  nameSchema,
  usTelephoneSchema,
} from "@/shared/model/schemas";
import { isPointWithinRadius } from "geolib";
import { DELIVERY_DISTANCE, RADIUS_CENTER_POSITION } from "@/shared/config";
import { milesToMeters } from "@/shared/lib";

const baseCheckoutSchema = {
  name: nameSchema,
  email: emailSchema,
  phone: usTelephoneSchema,
  deliveryDate: z.date({ error: "Please select delivery date" }),
  deliveryTime: z.string({ error: "Please select delivery time" }),
  notes: z.string().optional(),
  shippingNotes: z.string().optional(),
  termsAccepted: z
    .boolean("You must accept the terms")
    .refine((accepted) => accepted === true, {
      error: "You must accept the terms",
    }),
};

const pickupSchema = z.object({
  ...baseCheckoutSchema,
  orderType: z.literal("pickup"),
});

const deliverySchema = z
  .object({
    ...baseCheckoutSchema,
    orderType: z.literal("delivery"),
    recipientName: nameSchema,
    recipientPhone: usTelephoneSchema,
    shippingAddress: z.custom<google.maps.places.PlaceResult>(
      (val) => {
        return typeof val === "object" && val !== null;
      },
      { error: "Please select shipping address" },
    ),
  })
  .refine(
    ({ shippingAddress }) => {
      const lat = shippingAddress.geometry?.location?.lat();
      const lng = shippingAddress.geometry?.location?.lng();

      if (!lat || !lng) return;

      return isPointWithinRadius(
        RADIUS_CENTER_POSITION,
        { lat, lng },
        milesToMeters(DELIVERY_DISTANCE),
      );
    },
    {
      error:
        "Sorry, we’re not able to deliver to this location yet 💔. Don’t worry — store pickup is available.",
      path: ["shippingAddress"],
      when(payload) {
        return deliverySchema
          .pick({ shippingAddress: true })
          .safeParse(payload.value).success;
      },
    },
  );

export const checkoutSchema = z.discriminatedUnion("orderType", [
  pickupSchema,
  deliverySchema,
]);

export type DeliveryForm = z.infer<typeof deliverySchema>;
export type CheckoutForm = z.infer<typeof checkoutSchema>;
