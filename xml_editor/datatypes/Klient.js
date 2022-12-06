import { Wypozyczenie } from "./Wypozyczenie.js";

export class Klient {
    constructor(element) {
        this.parseKlient(element);
    }

    parseKlient(element) {
        this.pesel = element.querySelector("pesel");
        this.imie = element.querySelector("imie");
        this.nazwisko = element.querySelector("nazwisko");
        this.login = element.querySelector("login");
        this.wypozyczenia = this.parseWypozyczenia(element.querySelector("wypozyczenia"));
    }

    parseWypozyczenia(element) {
        const wypozyczeniaEl = element.querySelectorAll("wypozyczenie");
        const wypozyczenia = [];

        wypozyczeniaEl.forEach((wypozyczenie) => {
            wypozyczenia.push(new Wypozyczenie(wypozyczenie));
        });

        return wypozyczenia;
    }
}
