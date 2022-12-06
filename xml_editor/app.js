import xmlString from "./data/xmlString.js";
import { parseXML } from "./xml/parser.js";
import { XMLReader } from "./xml/reader.js";

document.addEventListener("DOMContentLoaded", () => {
    const xmlFileInput = document.querySelector("#xmlFileInput");

    xmlFileInput.addEventListener("change", (e) => {
        const [file] = e.target.files;
        const xmlParsed = parseXML(XMLReader.fromFile(file));
        console.log(xmlParsed);
    });

    const xmlParsed = parseXML(XMLReader.fromString(xmlString));
    console.log(xmlParsed);
});
