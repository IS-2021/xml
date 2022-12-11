import FileSection from "./sections/FileSection.jsx";
import AlbumsSection from "./sections/AlbumsSection.jsx";
import { useContext } from "react";
import GenresSection from "./sections/GenresSection";
import { StateContext } from "./contexts/StateContext.jsx";

function App() {
    const { state } = useContext(StateContext);

    return (
        <div className="App">
            <FileSection />
            {state.isLoaded && (
                <>
                    <GenresSection genres={state.xml.refs.gatunki} />
                    <AlbumsSection albums={state.xml.refs.albumy} />
                </>
            )}
        </div>
    );
}

export default App;
