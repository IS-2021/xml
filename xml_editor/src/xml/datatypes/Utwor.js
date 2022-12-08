import { Base } from "./Base.js";

export class Utwor extends Base {
    constructor(element) {
        super(element);
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
