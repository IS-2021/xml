export class Base {
    constructor(node) {
        this.node = node;
    }

    get(attr) {
        return this.node.getAttribute(attr);
    }

    getAsNumber(attr) {
        return Number(this.get(attr));
    }

    set(attr, val) {
        this.node.setAttribute(attr, val);
    }

    getNode(selector) {
        return this.node.querySelector(selector);
    }

    getNodeAll(selector) {
        return this.node.querySelectorAll(selector);
    }

    getNodeText(selector) {
        return this.getNode(selector).textContent;
    }

    setNodeText(selector, text) {
        this.getNode(selector).textContent = text;
    }

    get id() {
        return this.get("id");
    }

    set id(val) {
        this.set("id", val);
    }

    static fromNodeList(nodeList) {
        const instances = [];
        nodeList.forEach((node) => instances.push(new this(node)));
        return instances;
    }

    static createElement() {
        return document.createElementNS("", this.name.toLowerCase());
    }
}
