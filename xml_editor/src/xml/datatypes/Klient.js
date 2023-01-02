import { Base, element } from "./Base.js";
import { createWypozyczenieElement, Wypozyczenie } from "./Wypozyczenie.js";

export class Klient extends Base {
    constructor(element) {
        super(element);

        this.wypozyczenia = Wypozyczenie.fromNodeList(this.getNodeAll("wypozyczenie"));
    }

    toObject() {
        return {
            pesel: this.pesel ?? this.nip,
            imie: this.imie,
            nazwisko: this.nazwisko,
            login: this.login,
            wypozyczenia: this.wypozyczenia.map((wypozyczenie) => wypozyczenie.toObject()),
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

    get nip() {
        return this.getNodeText("nip");
    }

    set nip(val) {
        this.setNodeText("nip", val);
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
    const el = element("klient");

    const pesel = element("pesel", klient.pesel);
    const imie = element("imie", klient.imie);
    const nazwisko = element("nazwisko", klient.nazwisko);
    const login = element("login", klient.login);
    const wypozyczenia = element("wypozyczenia");
    klient.wypozyczenia.forEach((wypozyczenie) =>
        wypozyczenia.appendChild(createWypozyczenieElement(wypozyczenie))
    );

    el.appendChild(pesel);
    el.appendChild(imie);
    el.appendChild(nazwisko);
    el.appendChild(login);
    el.appendChild(wypozyczenia);

    return el;
}
