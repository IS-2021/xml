import Button from "../components/Button";
import { XMLDao } from "../xml/dao.js";
import demoXML from "../xml/demo";
import emptyXML from "../xml/empty";
import { useContext, useEffect } from "react";
import { XML_LOADED } from "../reducers/AppReducer.js";
import { StateContext } from "../contexts/StateContext.jsx";
import { Plytoteka } from "../xml/datatypes/Plytoteka.js";
import { objectToXML } from "../xml/objectToXML.js";

const dispatchLoadedXML = (dispatch, xml) => {
    const xmlReferences = new Plytoteka(xml);

    dispatch({
        type: XML_LOADED,
        payload: xmlReferences.toObject(),
    });
};

const loadDemoHandler = (dispatch) => {
    const original = XMLDao.fromString(demoXML);
    dispatchLoadedXML(dispatch, original);
};

const loadEmptyHandler = (dispatch) => {
    const empty = XMLDao.fromString(emptyXML);
    dispatchLoadedXML(dispatch, empty);
};

const loadFromFileHandler = (dispatch) => {
    const element = document.createElement("input");
    element.type = "file";
    element.accept = "text/xml";
    element.click();

    // Listen for the file to be selected
    element.addEventListener("change", () => {
        const [file] = element.files;
        const original = XMLDao.fromFile(file);
        dispatchLoadedXML(dispatch, original);
    });
};

function FileSection() {
    const { state, dispatch } = useContext(StateContext);

    return (
        <section>
            <h1>Edytor XML</h1>
            <p className="mb-4">Aby zaczać wczytaj poprawny dokument XML.</p>
            <div className="grid grid-cols-3 gap-2 max-w-fit mb-2">
                <Button
                    text="Wczytaj z pliku"
                    onClick={() => loadFromFileHandler(dispatch)}
                    className={"clear-left"}
                />
                <Button
                    text="Utwórz nowy"
                    onClick={() => loadEmptyHandler(dispatch)}
                    className={"clear-left"}
                />
                {state.isLoaded && (
                    <Button
                        text="Zapisz"
                        onClick={() => XMLDao.save(objectToXML(state.xml.refs))}
                        className={"clear-left"}
                    />
                )}
            </div>
            <p className="text-gray-500">
                ...lub wczytaj{" "}
                <a
                    href="#"
                    className="text-orange-400 hover:text-orange-600"
                    onClick={() => loadDemoHandler(dispatch)}
                >
                    demo
                </a>
                .
            </p>
        </section>
    );
}

export default FileSection;
