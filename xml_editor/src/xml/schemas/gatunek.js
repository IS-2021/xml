import { z } from "zod";
import { genreIDSchema } from "./common.js";

export const genreSchema = z.object({
    id: genreIDSchema,
    nazwa: z.string().min(3, "Nazwa musi mieć min. 3 znaki"),
});
