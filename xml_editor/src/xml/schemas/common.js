import { z } from "zod";

export const CURRENCIES = ["PLN", "EUR", "USD"];
export const peselSchema = z.string().length(11, "PESEL musi mieć dokładnie 11 znaków");
export const nipSchema = z.string().length(10, "NIP musi mieć dokładnie 10 znaków");
export const genreIDSchema = z.string().regex(/GAT_\d+/, "ID nie spełnia wzoru");
export const albumIDSchema = z.string().regex(/AL_\d+/, "ID nie spełnia wzoru");
export const min2Chars = z.string().min(2, "Wymagane min. 2 znaki");
