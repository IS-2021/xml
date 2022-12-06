export class Gatunek {
    constructor(element) {
        this.gatunek = this.parseGatunek(element);
    }

    parseGatunek(el) {
        return {
            id: el.id,
            nazwa: el.getAttribute("nazwa"),
        };
    }
}
