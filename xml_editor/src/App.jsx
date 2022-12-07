import FileSection from "./sections/FileSection.jsx";
import { useState } from "react";
import GenresSection from "./sections/GenresSection";

const initialState = {
    autor: {},
    gatunki: [],
};

function App() {
    const [xmlNodes, setXmlNodes] = useState(initialState);

    console.log(xmlNodes);

    return (
        <div className="App">
            <FileSection onFileLoad={setXmlNodes} />
            {xmlNodes.gatunki.length !== 0 && <GenresSection genres={xmlNodes.gatunki} />}
        </div>
    );
}

export default App;
