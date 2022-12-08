import { Base } from "./Base.js";
import { Wypozyczenie } from "./Wypozyczenie.js";

export class Klient extends Base {
    constructor(element) {
        super(element);

        this.wypozyczenia = Wypozyczenie.fromNodeList(this.getNodeAll("wypozyczenie"));
    }

    get pesel() {
        return this.getNodeText("pesel");
    }

    set pesel(val) {
        this.setNodeText("pesel", val);
    }

    get imie() {
        return this.getNodeText("imie");
    }

    set imie(val) {
        this.setNodeText("imie", val);
    }

    get nazwisko() {
        return this.getNodeText("nazwisko");
    }

    set nazwisko(val) {
        this.setNodeText("nazwisko", val);
    }

    get login() {
        return this.getNodeText("login");
    }

    set login(val) {
        this.setNodeText("login", val);
    }
}
