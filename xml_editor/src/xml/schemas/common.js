import { z } from "zod";


export const peselSchema = z.string().length(11, "PESEL musi mieć dokładnie 11 znaków");
export const nipSchema = z.string().length(10, "NIP musi mieć dokładnie 10 znaków");
