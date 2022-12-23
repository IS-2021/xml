import { z } from "zod";

export const genreSchema = z.object({
    id: z.string().regex(/GAT_\d+/, "ID nie spełnia wzoru"),
    nazwa: z.string().min(3, "Nazwa musi mieć min. 3 znaki"),
});
