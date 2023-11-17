import { z } from "zod";

export const ASchema = z.object({
    id : z.string(),
    date_of_announcement: z.string(),
    announcement_message: z.string(),
    announced_by: z.string(),});

export type Announcement  = z.infer<typeof ASchema>;
