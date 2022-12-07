import { Autor } from "../datatypes/Autor.js";
import { Gatunek } from "../datatypes/Gatunek.js";
import { Album } from "../datatypes/Album.js";
import { Klient } from "../datatypes/Klient.js";

export function parseXML(root) {
    const autor = root.querySelector("autor");
    const gatunki = root.querySelectorAll("gatunek");
    const albumy = root.querySelectorAll("album");
    const klienci = root.querySelectorAll("klient");

    return {
        autor: new Autor(autor),
        gatunki: Gatunek.fromNodeList(gatunki),
        albumy: Album.fromNodeList(albumy),
        klienci: Klient.fromNodeList(klienci),
    };
}
