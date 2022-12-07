export class Wypozyczenie {
    constructor(element) {
        this.parseWypozyczenie(element);
    }

    parseWypozyczenie(element) {
        this.albumy = element.querySelectorAll("album");
        this.dataRozpoczecia = element.querySelector("data_rozpoczecia");
        this.dataZakonczenia = element.querySelector("data_zakonczenia");
    }

    get albumIDs() {
        const ids = [];
        this.albumy.forEach((album) => ids.push(album.getAttribute("numer")));
        return ids;
    }
}
