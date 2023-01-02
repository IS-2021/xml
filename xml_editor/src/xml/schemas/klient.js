import { z } from "zod";
import { albumIDSchema, nipSchema, peselSchema } from "./common.js";

const emailSchema = z
    .string()
    .min(5, "Email musi posiadać min. 5 znaków")
    .regex(/\w+@\w+\.\w+/, "Email nie spełnia wzoru");
const nickSchema = z.string().min(3).max(16);

const wypozyczenieSchema = z.object({
    dataRozpoczecia: z.any(),
    dataZakonczenia: z.any(),
    albumy: z.array(
        z.object({
            numer: albumIDSchema,
        })
    ),
});

export const clientSchema = z.object({
    imie: z.string().min(3, "Imię musi mieć min. 3 znaki"),
    nazwisko: z.string().min(3, "Nazwisko musi mieć min. 3 znaki"),
    pesel: z.union([peselSchema, nipSchema]),
    login: z.union([emailSchema, nickSchema]),
    wypozyczenia: z.array(wypozyczenieSchema),
});
