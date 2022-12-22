import { Base } from "./Base.js";
import { Plyta } from "./Plyta.js";
import { Wykonawca } from "./Wykonawca.js";

export class Album extends Base {
    constructor(element) {
        super(element);

        this.plyty = Plyta.fromNodeList(this.getNodeAll("plyta"));
        this.wykonawcy = Wykonawca.fromNodeList(this.getNodeAll("wykonawca"));
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
