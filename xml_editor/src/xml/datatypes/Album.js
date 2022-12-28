import { Base } from "./Base.js";
import { Plyta } from "./Plyta.js";
import { Wykonawca } from "./Wykonawca.js";
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
            // wykonawcy
            producent: this.producent,
            dystrybutor: this.dystrybutor,
            opakowanie: this.opakowanie,
            // plyty
            dataPremiery: dayjs(this.dataPremiery),
            cena: {
                wartosc: this.cena,
                waluta: this.waluta,
            },
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
        // wykonawcy
        this.producent = newValues.producent;
        this.dystrybutor = newValues.dystrybutor;
        this.opakowanie = newValues.opakowanie;
        // plyty
        this.dataPremiery = newValues.dataPremiery;
        this.cena = newValues.cena.wartosc;
        this.waluta = newValues.cena.waluta;
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

export function createAlbumElement(id, gatunek, album) {
    const el = Album.createElement();
    el.id = id;
    el.setAttribute("gatunek", gatunek);
    el.innerHTML = `
        <nazwa>${album.nazwa}</nazwa>
        <okladka src="${album.okladka}" />
    `;
    return el;
}
