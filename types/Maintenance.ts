import { z } from "zod";

export const MSchema = z.object({
  payment_id: z.string(),
  flat_number: z.number(),
  date: z.string(),
  cost: z.number(),
  description: z.string(),
  maintenance_status: z.string(),
  payment_status: z.string(),
});

export type Maintain = z.infer<typeof MSchema>;
