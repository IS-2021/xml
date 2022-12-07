import { Base } from "./Base.js";

export class Gatunek extends Base {
    constructor(element) {
        super();
        this.gatunek = this.parseGatunek(element);
    }

    parseGatunek(el) {
        return {
            id: el.id,
            nazwa: el.getAttribute("nazwa"),
        };
    }
}
