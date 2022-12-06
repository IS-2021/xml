export class Album {
    constructor(element) {
        this.parseAlbum(element);
    }

    parseAlbum(element) {
        // Attributes
        this.id = element.getAttribute("id");
        this.gatunek = element.getAttribute("gatunek");

        // Elements
        this.nazwa = element.querySelector("nazwa");
        this.okladka = element.querySelector("okladka");
        this.wykonawcy = element.querySelectorAll("wykonawcy");
        this.producent = element.querySelector("producent");
        this.dystrybutor = element.querySelector("dystrybutor");
        this.opakowanie = element.querySelector("opakowanie");
        this.plyty = element.querySelectorAll("plyty");
        this.dataPremiery = element.querySelector("dataPremiery");
        this.cena = element.querySelector("cena");
        this.ocena = element.querySelector("ocena");
        this.naklad = element.querySelector("naklad");
        this.sprzedaneEgzemplarze = element.querySelector("sprzedaneEgzemplarze");
    }
}
