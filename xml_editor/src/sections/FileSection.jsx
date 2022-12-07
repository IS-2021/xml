import Button from "../components/Button";
import { parseXML } from "../xml/parser";
import { XMLReader } from "../xml/reader";
import demoXML from "../xml/demo";
import { useEffect } from "react";

const loadDemoHandler = (onFileLoad) => {
    const xmlParsed = parseXML(XMLReader.fromString(demoXML));
    onFileLoad(xmlParsed);
};

const loadFromFileHandler = (onFileLoad) => {
    const element = document.createElement("input");
    element.type = "file";
    element.click();

    // Listen for the file to be selected
    element.addEventListener("change", (e) => {
        const [file] = element.files;
        const xmlParsed = parseXML(XMLReader.fromFile(file));
        onFileLoad(xmlParsed);
    });
};

function FileSection({ onFileLoad }) {
    useEffect(() => {
        loadDemoHandler(onFileLoad);
    }, []);

    return (
        <section>
            <h1>Edytor XML</h1>
            <p className="mb-4">Aby zaczać wczytaj poprawny dokument XML.</p>
            <div className="grid grid-cols-2 gap-2 max-w-fit">
                <Button
                    text="Wczytaj z pliku"
                    onClick={() => loadFromFileHandler(onFileLoad)}
                    className={"clear-left"}
                />
                <Button
                    text="Wczytaj demo"
                    onClick={() => loadDemoHandler(onFileLoad)}
                    className={"clear-left"}
                />
            </div>
        </section>
    );
}

export default FileSection;
