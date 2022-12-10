import FileSection from "./sections/FileSection.jsx";
import { useState } from "react";
import GenresSection from "./sections/GenresSection";
import { createGatunekElement } from "./xml/datatypes/Gatunek";

const initialParsedState = {
    autor: {},
    zadanie: {},
    gatunki: [],
    albumy: [],
    klienci: [],
};

const initialXML = {
    original: null,
    refs: initialParsedState,
};

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [xmlDoc, setXmlDoc] = useState(initialXML);

    function addGenre(genreName) {
        const lastId = parseInt(xmlDoc.refs.gatunki[xmlDoc.refs.gatunki.length - 1].id.replace("GAT_", "") | 0) + 1;
        const newGenre = createGatunekElement(String(lastId), genreName);

        xmlDoc.refs.topLevelNodes.gatunki.appendChild(newGenre);
        setXmlDoc({...xmlDoc});
    }

    return (
        <div className="App">
            <FileSection xmlToSave={xmlDoc.original} setXMLDocument={setXmlDoc} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
            {isLoaded && <GenresSection genres={xmlDoc.refs.gatunki} />}
        </div>
    );
}

export default App;
