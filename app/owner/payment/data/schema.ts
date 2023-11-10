import { z } from "zod";

export const PSchema = z.object({
  date: z.string(),
  id: z.string(),
  cost: z.number(),
  status: z.string(),
});

export type Payment = z.infer<typeof PSchema>;
