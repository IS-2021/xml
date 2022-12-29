import { Base } from "./Base.js";

export class Wykonawca extends Base {
    constructor(element) {
        super(element);
    }

    toObject() {
        return {
            nazwa: this.nazwa,
            czyZagraniczny: this.czyZagranicznyBool,
        };
    }

    updateFromObject(o) {
        const newValues = { ...this.toObject(), ...o };

        this.nazwa = newValues.nazwa;
        this.czyZagranicznyBool = newValues.czyZagraniczny;
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

    get czyZagranicznyBool() {
        return this.czyZagraniczny === "tak";
    }

    set czyZagranicznyBool(val) {
        this.czyZagraniczny = val === true ? "tak" : "nie";
    }
}
