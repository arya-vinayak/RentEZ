import { z } from "zod";

export const MSchema = z.object({
  flat_number: z.string(),
  date: z.string(),
  cost: z.number(),
  description: z.string(),
  maintenance_status: z.string(),
  maintenance_payment_status: z.string(),
});

export type Maintain = z.infer<typeof MSchema>;
