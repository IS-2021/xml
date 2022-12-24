import { Base } from "./Base.js";

export class Gatunek extends Base {
    constructor(element) {
        super(element);
    }

    toObject() {
        return {
            id: this.node.id,
            nazwa: this.nazwa,
        };
    }

    updateFromObject(o) {
        this.node.id = o.id;
        this.nazwa = o.nazwa;
    }

    get nazwa() {
        return this.get("nazwa");
    }

    set nazwa(val) {
        this.set("nazwa", val);
    }
}

export function createGatunekElement(id, nazwa) {
    console.log(id, nazwa);
    const el = document.createElement("gatunek");
    el.id = id;
    el.setAttribute("nazwa", nazwa);
    return el;
}
