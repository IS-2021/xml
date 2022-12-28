import { z } from "zod";
import { albumIDSchema, CURRENCIES, genreIDSchema, min2Chars } from "./common.js";

export const rating05 = "Ocena musi być z zakresu od 0 do 5";
export const ALBUM_CASE_TYPES = ["Digipack", "Digibook", "Jewel Case", "Standard"];

export const albumSchema = z.object({
    id: albumIDSchema,
    gatunek: genreIDSchema,
    nazwa: min2Chars,
    okladka: z.string().min(1, "Wymagany min. 1 znak"),
    // wykonawcy
    producent: min2Chars,
    dystrybutor: min2Chars,
    opakowanie: z.enum(ALBUM_CASE_TYPES),
    // plyty
    // data_premiery
    cena: z.object({
        waluta: z.enum(CURRENCIES),
        wartosc: z.coerce.number().min(0, "Cena nie może być ujemna"),
    }),
    ocena: z.coerce.number().min(0, rating05).max(5, rating05),
    naklad: z.coerce.number().positive("Nakład musi być dodatni").int("Wymagana liczba całkowita"),
    sprzedaneEgzemplarze: z.coerce
        .number()
        .nonnegative("Wymagana liczba nieujemna")
        .int("Wymagana liczba całkowita"),
});
