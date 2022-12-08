import FileSection from "./sections/FileSection.jsx";
import { useState } from "react";
import GenresSection from "./sections/GenresSection";

const initialState = {
    autor: {},
    zadanie: {},
    gatunki: [],
    albumy: [],
    klienci: [],
};

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadedXML, setLoadedXML] = useState(initialState);

    return (
        <div className="App">
            <FileSection xmlDocument={loadedXML} setXMLDocument={setLoadedXML} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
            {isLoaded && <GenresSection genres={loadedXML.gatunki} />}
        </div>
    );
}

export default App;
