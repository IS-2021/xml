import { Base } from "./Base.js";

export class Gatunek extends Base {
    constructor(element) {
        super(element);
    }

    get nazwa() {
        return this.get("nazwa");
    }

    set nazwa(val) {
        this.set("nazwa", val);
    }
}

export function createGatunekElement(id, nazwa) {
    const el = document.createElement("gatunek");
    el.id = `GAT_${id.padStart(2, "0")}`;
    el.setAttribute("nazwa", nazwa);
    return el;
}
