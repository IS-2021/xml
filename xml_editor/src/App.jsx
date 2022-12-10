import FileSection from "./sections/FileSection.jsx";
import { useState } from "react";
import GenresSection from "./sections/GenresSection";

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

    return (
        <div className="App">
            <FileSection xmlToSave={xmlDoc.original} setXMLDocument={setXmlDoc} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
            {isLoaded && <GenresSection genres={xmlDoc.refs.gatunki} />}
        </div>
    );
}

export default App;
