import { Base } from "./Base.js";

class Album extends Base {
    constructor(element) {
        super(element);
    }

    get numer() {
        return this.get("numer");
    }

    set numer(val) {
        this.set("numer", val);
    }
}

export class Wypozyczenie extends Base {
    constructor(element) {
        super(element);

        this.albumy = Album.fromNodeList(this.getNodeAll("album"));
    }

    get dataRozpoczecia() {
        return this.getNodeText("data_rozpoczecia");
    }

    set dataRozpoczecia(val) {
        this.setNodeText("data_rozpoczecia", val);
    }

    get dataZakonczenia() {
        return this.getNodeText("data_zakonczenia");
    }

    set dataZakonczenia(val) {
        this.setNodeText("data_zakonczenia", val);
    }
}
