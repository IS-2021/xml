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
    const [loadedXML, setLoadedXML] = useState(initialState);

    return (
        <div className="App">
            <FileSection xmlDraft={loadedXML} onFileLoad={setLoadedXML} />
            {loadedXML.gatunki.length !== 0 && <GenresSection genres={loadedXML.gatunki} />}
        </div>
    );
}

export default App;
