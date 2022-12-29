import { z } from "zod";

export const wykonawcaSchema = z.object({
    nazwa: z.string().min(1, "Wymagany min. 1 znak"),
    czyZagraniczny: z.boolean(),
});
