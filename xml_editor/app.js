import { Autor } from "./datatypes/autor.js";
import { Gatunek } from "./datatypes/gatunek.js";

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

    const autorParsed = new Autor(autor);
    const gatunkiParsed = [new Gatunek(gatunki[0])];
    gatunki.forEach((gatunek) => gatunkiParsed.push(new Gatunek(gatunek)));

    return {
        autor: autorParsed,
        gatunki: gatunkiParsed,
        albumy: albumy,
        klienci: klienci,
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
