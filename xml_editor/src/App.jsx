import FileSection from "./sections/FileSection.jsx";
import AlbumsSection from "./sections/AlbumsSection.jsx";
import ClientsSection from "./sections/ClientsSection.jsx";
import { useContext } from "react";
import GenresSection from "./sections/GenresSection";
import { StateContext } from "./contexts/StateContext.jsx";

const blurStyle = {
    filter: "blur(1rem)",
    overflowY: "hidden",
    transition: "300ms filter ease-out",
};

function App() {
    const { state, dispatch } = useContext(StateContext);

    return (
        <div className="App" style={state.isModalOpen ? blurStyle : {}}>
            <FileSection />
            {state.isLoaded && (
                <>
                    <GenresSection genres={state.xml.refs.gatunki} />
                    {state.xml.refs.gatunki.length > 0 && (
                        <AlbumsSection albums={state.xml.refs.albumy} />
                    )}
                    <ClientsSection clients={state.xml.refs.klienci} />
                </>
            )}
        </div>
    );
}

export default App;
