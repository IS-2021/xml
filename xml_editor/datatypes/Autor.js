export class Autor {
    constructor(element) {
        this.student = this.parseStudent(element.querySelector("student"));
        this.zadanie = this.parseZadanie(element.querySelector("zadanie"));
    }

    parseStudent(el) {
        return {
            imie: el.querySelector("imie"),
            nazwisko: el.querySelector("nazwisko"),
            indeks: el.querySelector("indeks"),
        };
    }

    parseZadanie(el) {
        return {
            temat: el.querySelector("temat"),
            nazwa: el.querySelector("nazwa"),
        };
    }
}
