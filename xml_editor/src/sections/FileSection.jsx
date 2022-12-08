import Button from "../components/Button";
import { parseXML } from "../xml/parser";
import { XMLDao } from "../xml/dao.js";
import demoXML from "../xml/demo";
import { useEffect } from "react";

const loadDemoHandler = (onFileLoad) => {
    const xmlParsed = parseXML(XMLDao.fromString(demoXML));
    onFileLoad(xmlParsed);
};

const loadFromFileHandler = (onFileLoad) => {
    const element = document.createElement("input");
    element.type = "file";
    element.click();

    // Listen for the file to be selected
    element.addEventListener("change", (e) => {
        const [file] = element.files;
        const xmlParsed = parseXML(XMLDao.fromFile(file));
        onFileLoad(xmlParsed);
    });
};

function FileSection({ xmlDocument, onFileLoad }) {
    useEffect(() => {
        loadDemoHandler(onFileLoad);
    }, []);

    return (
        <section>
            <h1>Edytor XML</h1>
            <p className="mb-4">Aby zaczać wczytaj poprawny dokument XML.</p>
            <div className="grid grid-cols-3 gap-2 max-w-fit">
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
                <Button
                  text="Zapisz"
                  onClick={() => XMLDao.save(xmlDocument)}
                  className={"clear-left"}
                />
            </div>
        </section>
    );
}

export default FileSection;
