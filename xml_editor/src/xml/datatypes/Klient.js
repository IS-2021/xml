import { Base } from "./Base.js";
import { Wypozyczenie } from "./Wypozyczenie.js";

export class Klient extends Base {
    constructor(element) {
        super(element);

        this.wypozyczenia = Wypozyczenie.fromNodeList(this.getNodeAll("wypozyczenie"));
    }

    toObject() {
        return {
            pesel: this.pesel,
            imie: this.imie,
            nazwisko: this.nazwisko,
            login: this.login,
        };
    }

    updateFromObject(o) {
        const newValues = { ...this.toObject(), ...o };

        this.pesel = newValues.pesel;
        this.imie = newValues.imie;
        this.nazwisko = newValues.nazwisko;
        this.login = newValues.login;
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

export function createKlientElement(klient) {
    const el = Klient.createElement();
    el.innerHTML = `
        <pesel>${klient.pesel}</pesel>
        <imie>${klient.imie}</imie>
        <nazwisko>${klient.nazwisko}</nazwisko>
        <login>${klient.login}</login>
        <wypozyczenia></wypozyczenia>
    `;
    return el;
}
