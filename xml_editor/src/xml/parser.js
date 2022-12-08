import { Autor } from "./datatypes/Autor.js";
import { Zadanie } from "./datatypes/Zadanie.js";
import { Gatunek } from "./datatypes/Gatunek.js";
import { Album } from "./datatypes/Album.js";
import { Klient } from "./datatypes/Klient.js";

export function parseXML(root) {
    const autorZadanie = root.querySelector("autor");
    const gatunki = root.querySelectorAll("gatunek");
    const albumy = root.querySelectorAll("album");
    const klienci = root.querySelectorAll("klient");

    return {
        autor: new Autor(autorZadanie),
        zadanie: new Zadanie(autorZadanie),
        gatunki: Gatunek.fromNodeList(gatunki),
        albumy: Album.fromNodeList(albumy),
        klienci: Klient.fromNodeList(klienci),
    };
}
