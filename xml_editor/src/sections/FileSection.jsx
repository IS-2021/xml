import Button from "../components/Button";
import { parseXML } from "../xml/parser";
import { XMLDao } from "../xml/dao.js";
import demoXML from "../xml/demo";
import { useEffect } from "react";
import {parseXML} from "../xml/parser.js";

const loadDemoHandler = (setXMLDocument, setIsLoaded) => {
    const original = XMLDao.fromString(demoXML);
    setXMLDocument({
      original: original,
      refs: parseXML(original)
    });
    setIsLoaded(true);
};

const loadFromFileHandler = (setXMLDocument, setIsLoaded) => {
    const element = document.createElement("input");
    element.type = "file";
    element.accept = "text/xml";
    element.click();

    // Listen for the file to be selected
    element.addEventListener("change", (e) => {
        const [file] = element.files;
        const original = XMLDao.fromFile(file);
        setXMLDocument({
          original: original,
          refs: parseXML(original)
        });
        setIsLoaded(true);
    });
};

function FileSection({ xmlToSave, setXMLDocument, isLoaded, setIsLoaded }) {
    useEffect(() => {
        loadDemoHandler(setXMLDocument, setIsLoaded);
    }, []);

    return (
        <section>
            <h1>Edytor XML</h1>
            <p className="mb-4">Aby zaczać wczytaj poprawny dokument XML.</p>
            <div className="grid grid-cols-3 gap-2 max-w-fit">
                <Button
                    text="Wczytaj z pliku"
                    onClick={() => loadFromFileHandler(setXMLDocument, setIsLoaded)}
                    className={"clear-left"}
                />
                <Button
                    text="Wczytaj demo"
                    onClick={() => loadDemoHandler(setXMLDocument, setIsLoaded)}
                    className={"clear-left"}
                />
                {isLoaded && <Button
                  text="Zapisz"
                  onClick={() => XMLDao.save(xmlToSave)}
                  className={"clear-left"}
                />}
            </div>
        </section>
    );
}

export default FileSection;
