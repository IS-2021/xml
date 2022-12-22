import { Base } from "./Base.js";

export class Wykonawca extends Base {
    constructor(element) {
        super(element);
    }

    get nazwa() {
        return this.node.textContent;
    }

    set nazwa(val) {
        return (this.node.textContent = val);
    }

    get czyZagraniczny() {
        return this.get("czyZagraniczny");
    }

    set czyZagraniczny(val) {
        this.set("czyZagraniczny", val);
    }
}
