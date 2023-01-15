import { Base, element } from "./Base.js";
import { createPlytaElement, Plyta } from "./Plyta.js";
import { createWykonawcaElement, Wykonawca } from "./Wykonawca.js";
import dayjs from "dayjs";

export class Album extends Base {
    constructor(element) {
        super(element);

        this.plyty = Plyta.fromNodeList(this.getNodeAll("plyta"));
        this.wykonawcy = Wykonawca.fromNodeList(this.getNodeAll("wykonawca"));
    }

    toObject() {
        return {
            id: this.node.id,
            gatunek: this.gatunek,
            nazwa: this.nazwa,
            okladka: this.okladka,
            wykonawcy: this.wykonawcy.map((wykonawca, idx) => ({
                id: idx,
                ...wykonawca.toObject(),
            })),
            producent: this.producent,
            dystrybutor: this.dystrybutor,
            opakowanie: this.opakowanie,
            plyty: this.plyty.map((plyta) => plyta.toObject()),
            dataPremiery: dayjs(this.dataPremiery),
            cena: this.cena,
            waluta: this.waluta,
            ocena: this.ocena,
            naklad: this.naklad,
            sprzedaneEgzemplarze: this.sprzedaneEgzemplarze,
        };
    }

    updateFromObject(o) {
        const newValues = { ...this.toObject(), ...o };

        this.id = newValues.id;
        this.gatunek = newValues.gatunek;
        this.nazwa = newValues.nazwa;
        this.okladka = newValues.okladka;
        // TODO: Removing/adding singers
        this.wykonawcy.forEach((w, idx) => w.updateFromObject(newValues.wykonawcy[idx]));
        this.producent = newValues.producent;
        this.dystrybutor = newValues.dystrybutor;
        this.opakowanie = newValues.opakowanie;
        // plyty
        this.dataPremiery = newValues.dataPremiery;
        this.cena = newValues.cena;
        this.waluta = newValues.waluta;
        this.ocena = newValues.ocena;
        this.naklad = newValues.naklad;
        this.sprzedaneEgzemplarze = newValues.sprzedaneEgzemplarze;
    }

    // Attributes
    get gatunek() {
        return this.get("gatunek");
    }

    set gatunek(val) {
        this.set("gatunek", val);
    }

    // Elements
    get nazwa() {
        return this.getNodeText("nazwa");
    }

    set nazwa(val) {
        this.setNodeText("nazwa", val);
    }

    get okladka() {
        return this.getNode("okladka").getAttribute("src");
    }

    set okladka(src) {
        this.getNode("okladka").setAttribute("src", src);
    }

    get producent() {
        return this.getNodeText("producent");
    }

    set producent(val) {
        this.setNodeText("producent", val);
    }

    get dystrybutor() {
        return this.getNodeText("dystrybutor");
    }

    set dystrybutor(val) {
        this.setNodeText("dystrybutor", val);
    }

    get opakowanie() {
        return this.getNodeText("opakowanie");
    }

    set opakowanie(val) {
        this.setNodeText("opakowanie", val);
    }

    get dataPremiery() {
        return this.getNodeText("data_premiery");
    }

    set dataPremiery(val) {
        this.setNodeText("data_premiery", val);
    }

    get ocena() {
        return this.getNodeText("ocena");
    }

    set ocena(val) {
        this.setNodeText("ocena", val);
    }

    get cena() {
        return this.getNode("cena").textContent;
    }

    set cena(val) {
        this.getNode("cena").textContent = val;
    }

    get waluta() {
        return this.getNode("cena").getAttribute("waluta");
    }

    set waluta(val) {
        this.getNode("cena").setAttribute("waluta", val);
    }

    get naklad() {
        return this.getNodeText("naklad");
    }

    set naklad(val) {
        this.setNodeText("naklad", val);
    }

    get sprzedaneEgzemplarze() {
        return this.getNodeText("sprzedaneEgzemplarze");
    }

    set sprzedaneEgzemplarze(val) {
        this.setNodeText("sprzedaneEgzemplarze", val);
    }
}

export function createAlbumElement(album) {
    const albumEl = element("album");
    albumEl.id = album.id;
    albumEl.setAttribute("gatunek", album.gatunek);
    albumEl.setAttribute("explicit", "false");

    const nazwa = element("nazwa", album.nazwa);
    const okladka = element("okladka");
    okladka.setAttribute("src", album.okladka);
    const wykonawcy = element("wykonawcy");
    album.wykonawcy.forEach((wykonawca) =>
        wykonawcy.appendChild(createWykonawcaElement(wykonawca))
    );
    const producent = element("producent", album.producent);
    const dystrybutor = element("dystrybutor", album.dystrybutor);
    const opakowanie = element("opakowanie", album.opakowanie);
    const plyty = element("plyty");
    album.plyty.forEach((plyta) => plyty.appendChild(createPlytaElement(plyta)));
    const dataPremiery = element("data_premiery", dayjs(album.dataPremiery).format("YYYY-MM-DD"));
    const cena = element("cena", album.cena);
    cena.setAttribute("waluta", album.waluta);
    const ocena = element("ocena", album.ocena);
    const naklad = element("naklad", album.naklad);
    const sprzedaneEgzemplarze = element("sprzedaneEgzemplarze", album.sprzedaneEgzemplarze);

    albumEl.appendChild(nazwa);
    albumEl.appendChild(okladka);
    albumEl.appendChild(wykonawcy);
    albumEl.appendChild(producent);
    albumEl.appendChild(dystrybutor);
    albumEl.appendChild(opakowanie);
    albumEl.appendChild(plyty);
    albumEl.appendChild(dataPremiery);
    albumEl.appendChild(cena);
    albumEl.appendChild(ocena);
    albumEl.appendChild(naklad);
    albumEl.appendChild(sprzedaneEgzemplarze);

    return albumEl;
}
