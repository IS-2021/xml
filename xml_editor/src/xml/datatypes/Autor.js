import { Base } from "./Base.js";

export class Autor extends Base {
    constructor(element) {
        super(element);
    }

    // Student
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

    get indeks() {
        return this.getNodeText("indeks");
    }

    set indeks(val) {
        this.setNodeText("indeks", val);
    }
}