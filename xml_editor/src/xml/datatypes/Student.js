import { Base, element } from "./Base.js";

export class Student extends Base {
    constructor(element) {
        super(element);
    }

    toObject() {
        return {
            imie: this.imie,
            nazwisko: this.nazwisko,
            indeks: this.indeks,
        };
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

    get indeks() {
        return this.getNodeText("indeks");
    }

    set indeks(val) {
        this.setNodeText("indeks", val);
    }
}

export function createStudentElement(student) {
    const el = element("student");

    const imie = element("imie", student.imie);
    const nazwisko = element("nazwisko", student.nazwisko);
    const indeks = element("indeks", student.indeks);

    el.appendChild(imie);
    el.appendChild(nazwisko);
    el.appendChild(indeks);

    return el;
}
