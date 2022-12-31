import { Base, element } from "./Base.js";

export class Utwor extends Base {
    constructor(element) {
        super(element);
    }

    toObject() {
        return {
            numer: this.numer,
            nazwa: this.nazwa,
            dlugosc: this.dlugosc,
        };
    }

    get numer() {
        return this.getNodeText("numer");
    }

    set numer(val) {
        this.setNodeText("numer", val);
    }

    get nazwa() {
        return this.getNodeText("nazwa");
    }

    set nazwa(val) {
        this.setNodeText("nazwa", val);
    }

    get dlugosc() {
        return this.getNodeText("dlugosc");
    }

    set dlugosc(val) {
        this.setNodeText("dlugosc", val);
    }
}

export function createUtworElement(utwor) {
    const el = element("utwor");

    const numer = element("numer", utwor.numer);
    const nazwa = element("nazwa", utwor.nazwa);
    const dlugosc = element("dlugosc", utwor.dlugosc);

    el.appendChild(numer);
    el.appendChild(nazwa);
    el.appendChild(dlugosc);

    return el;
}
