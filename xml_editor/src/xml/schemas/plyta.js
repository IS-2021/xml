import { z } from "zod";

export const utworSchema = z.object({
    numer: z.string().regex(/\d{2}/, "Numer nie spełnia wzoru XX"),
    nazwa: z.string().min(3, "Wymagane min. 3 znaki"),
    dlugosc: z.string().regex(/[1-5][0-9]?:[0-5][0-9]/, "Dłguość nie spełnia wzoru X:XX lub XX:XX"),
});

export const plytaSchema = z.object({
    cd: z.coerce.number().positive("Numer płyty musi być dodatni"),
    utwory: z.array(utworSchema).nonempty("Płyta musi mieć min. jeden utwór"),
});
