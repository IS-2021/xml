export function fromNodeList(nodeList, _Class) {
    const instances = [];
    nodeList.forEach((node) => instances.push(new _Class(node)));
    return instances;
}
