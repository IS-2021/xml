export class Base {
    static fromNodeList(nodeList) {
        const instances = [];
        nodeList.forEach((node) => instances.push(new this(node)));
        return instances;
    }
}
