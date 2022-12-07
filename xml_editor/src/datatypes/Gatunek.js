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
