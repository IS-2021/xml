import { Autor } from "./datatypes/Autor.js";
import { Gatunek } from "./datatypes/Gatunek.js";
import { Klient } from "./datatypes/Klient.js";
import { fromNodeList } from "./datatypes/helpers.js";

function loadXMLFile(inputFile) {
    const url = URL.createObjectURL(inputFile);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Content-Type", "text/xml");
    xhr.send(null);

    const xmlDoc = xhr.responseXML;
    return xmlDoc.children[0]; // root node
}

function parseXML(root) {
    const autor = root.querySelector("autor");
    const gatunki = root.querySelectorAll("gatunek");
    const albumy = root.querySelectorAll("album");
    const klienci = root.querySelectorAll("klient");

    return {
        autor: new Autor(autor),
        gatunki: fromNodeList(gatunki, Gatunek),
        albumy: albumy,
        klienci: fromNodeList(klienci, Klient),
    };
}

document.addEventListener("DOMContentLoaded", () => {
    const xmlFileInput = document.querySelector("#xmlFileInput");

    xmlFileInput.addEventListener("change", (e) => {
        const [file] = e.target.files;
        const xmlRoot = loadXMLFile(file);
        const xmlParsed = parseXML(xmlRoot);
        console.log(xmlParsed);
    });
});
