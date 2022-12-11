import { Autor } from "./Autor.js";
import { Zadanie } from "./Zadanie.js";
import { Gatunek } from "./Gatunek.js";
import { Album } from "./Album.js";
import { Klient } from "./Klient.js";

// noinspection CssInvalidHtmlTagReference
export class Plytoteka {
    constructor(root) {
        this.autor = new Autor(root.querySelector("autor"));
        this.zadanie = new Zadanie(root.querySelector("autor"));
        this._selectors = {
            gatunki: () => root.querySelectorAll("gatunek"),
            albumy: () => root.querySelectorAll("album"),
            klienci: () => root.querySelectorAll("klient"),
        };
        this.topLevelNodes = {
            autor: root.querySelector("autor"),
            gatunki: root.querySelector("plytoteka > gatunki"),
            albumy: root.querySelector("plytoteka > albumy"),
            klienci: root.querySelector("plytoteka > klienci"),
        };
    }

    get gatunki() {
        return Gatunek.fromNodeList(this._selectors.gatunki());
    }

    get gatunkiCount() {
        return this.topLevelNodes.gatunki.childElementCount;
    }

    get albumy() {
        return Album.fromNodeList(this._selectors.albumy());
    }

    get albumyCount() {
        return this.topLevelNodes.albumy.childElementCount;
    }

    get klienci() {
        return Klient.fromNodeList(this._selectors.klienci());
    }

    get klienciCount() {
        return this.topLevelNodes.klienci.childElementCount;
    }
}
