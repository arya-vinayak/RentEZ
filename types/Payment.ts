import { z } from "zod";

export const PSchema = z.object({
  id: z.string(),
  tenant_id: z.string(),
  owner_id: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  cost: z.number().min(0),
  status: z.string(),
  type: z.string().refine(value => value === "rent" || value === "maintenance", {
    message: "Type must be either 'rent' or 'maintenance'",
  }),
});

export type Payment = z.infer<typeof PSchema>;
