import { Base, element } from "./Base.js";

export class Zadanie extends Base {
    constructor(element) {
        super(element);
    }

    toObject() {
        return {
            temat: this.temat,
            nazwa: this.nazwa,
        };
    }

    get temat() {
        return this.getNodeText("temat");
    }

    set temat(val) {
        this.setNodeText("temat", val);
    }

    get nazwa() {
        return this.getNodeText("nazwa");
    }

    set nazwa(val) {
        this.setNodeText("nazwa", val);
    }
}

export function createZadanieElement(zadanie) {
    const el = element("zadanie");

    const temat = element("temat", zadanie.temat);
    const nazwa = element("nazwa", zadanie.nazwa);

    el.appendChild(temat);
    el.appendChild(nazwa);

    return el;
}
