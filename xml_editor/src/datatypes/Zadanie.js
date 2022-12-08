import { Base } from "./Base.js";

export class Zadanie extends Base {
    constructor(element) {
        super(element);
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
