import z from "zod";

export const sortShopSchema = z
  .enum(["featured", "price_asc", "price_desc", "latest"])
  .catch("latest");

export const catalogFiltersSchema = z.object({
  page: z
    .string()
    .default("1")
    .transform((page) => parseInt(page))
    .pipe(z.number().min(1))
    .catch(1),
  sort: sortShopSchema,
  priceRange: z
    .string()
    .refine((priceRange) => {
      const [from, to] = priceRange.split("-");

      return from && to && Number(from) && Number(to);
    })
    .optional()
    .nullable()
    .transform((priceRange) => {
      if (!priceRange) return;

      const [from, to] = priceRange.split("-");

      if (!from || !to) {
        return;
      }

      return { from: Number(from), to: Number(to) };
    })
    .catch(undefined),
});

export type CatalogFilters = z.infer<typeof catalogFiltersSchema>;
export type CatalogSort = z.infer<typeof sortShopSchema>;
