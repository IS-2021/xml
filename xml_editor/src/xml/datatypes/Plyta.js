import { Base } from "./Base.js";
import { Utwor } from "./Utwor.js";

export class Plyta extends Base {
    constructor(element) {
        super(element);

        this.utwory = Utwor.fromNodeList(this.getNodeAll("utwor"));
    }

    get cd() {
        return this.get("cd");
    }

    set cd(val) {
        return this.set("cd", val);
    }
}
