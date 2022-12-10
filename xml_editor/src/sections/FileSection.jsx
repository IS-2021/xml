import Button from "../components/Button";
import { XMLDao } from "../xml/dao.js";
import demoXML from "../xml/demo";
import { useContext, useEffect } from "react";
import { XML_LOADED } from "../reducers/AppReducer.js";
import { Plytoteka } from "../xml/datatypes/Plytoteka";
import { StateContext } from "../contexts/StateContext.jsx";

const dispatchLoadedXML = (dispatch, xml) => {
    dispatch({
        type: XML_LOADED,
        payload: {
            xml: {
                original: xml,
                refs: new Plytoteka(xml),
            },
        },
    });
};

const loadDemoHandler = (dispatch) => {
    const original = XMLDao.fromString(demoXML);
    dispatchLoadedXML(dispatch, original);
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

    useEffect(() => {
        loadDemoHandler(dispatch);
    }, []);

    return (
        <section>
            <h1>Edytor XML</h1>
            <p className="mb-4">Aby zaczać wczytaj poprawny dokument XML.</p>
            <div className="grid grid-cols-3 gap-2 max-w-fit">
                <Button
                    text="Wczytaj z pliku"
                    onClick={() => loadFromFileHandler(dispatch)}
                    className={"clear-left"}
                />
                <Button
                    text="Wczytaj demo"
                    onClick={() => loadDemoHandler(dispatch)}
                    className={"clear-left"}
                />
                {state.isLoaded && (
                    <Button
                        text="Zapisz"
                        onClick={() => XMLDao.save(state.xml.original)}
                        className={"clear-left"}
                    />
                )}
            </div>
        </section>
    );
}

export default FileSection;
