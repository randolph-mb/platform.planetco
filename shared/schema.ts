import { z } from "zod";

// Product status types
export const productStatusSchema = z.enum(["alpha", "private_beta", "live"]);
export type ProductStatus = z.infer<typeof productStatusSchema>;

// Product category types
export const productCategorySchema = z.enum(["Build", "Ops", "Analytics"]);
export type ProductCategory = z.infer<typeof productCategorySchema>;

// Product schema
export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  tagline: z.string(),
  status: productStatusSchema,
  category: productCategorySchema,
  url: z.string(),
  learn: z.string(),
  thumbnail: z.string(),
  pill: z.string(),
  overview: z.string(),
  capabilities: z.array(z.string()),
});

export type Product = z.infer<typeof productSchema>;

// For API responses
export const productsResponseSchema = z.array(productSchema);
