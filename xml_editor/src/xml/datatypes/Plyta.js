import { Base, element } from "./Base.js";
import { createUtworElement, Utwor } from "./Utwor.js";

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

export function createPlytaElement(plyta) {
    const el = element("plyta");
    el.setAttribute("cd", plyta.cd);

    const utwory = element("utwory");
    plyta.utwory.forEach((utwor) => utwory.appendChild(createUtworElement(utwor)));
    el.appendChild(utwory);

    return el;
}
