import { z } from "zod";

export const CSchema = z.object({
    tenant_id: z.string(),
    owner_id: z.string(),
    start_date: z.string(),
    end_date: z.string(),
    pdfUrl: z.string(),
})

export type Contract = z.infer<typeof CSchema>;
