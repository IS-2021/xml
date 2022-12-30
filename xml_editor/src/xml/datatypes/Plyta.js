import { Base } from "./Base.js";
import { Utwor } from "./Utwor.js";

export class Plyta extends Base {
    constructor(element) {
        super(element);

        this.utwory = Utwor.fromNodeList(this.getNodeAll("utwor"));
    }

    toObject() {
        return {
            cd: this.cd,
            utwory: this.utwory.map((utwor) => utwor.toObject()),
        };
    }

    get cd() {
        return this.get("cd");
    }

    set cd(val) {
        return this.set("cd", val);
    }
}
