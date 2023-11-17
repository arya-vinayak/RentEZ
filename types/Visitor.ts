import { z } from "zod";

export const VSchema = z.object({
  date_of_visit: z.string(),
  visitor_name: z.string(),
  time_of_visit: z.string(),
  flat_number: z.string(),
});

export type Visitor = z.infer<typeof VSchema>;
