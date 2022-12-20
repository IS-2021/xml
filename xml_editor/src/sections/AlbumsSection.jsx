import Album from "../components/Album";
import "./AlbumsSection.css";
import Modal from "../components/Modal.jsx";
import { useContext } from "react";
import { StateContext } from "../contexts/StateContext.jsx";
import { CLOSE_MODAL, OPEN_MODAL } from "../reducers/AppReducer.js";

function AlbumsSection({ albums }) {
    const { state, dispatch } = useContext(StateContext);

    const styles = {
        justifyContent: "space-evenly"
    };

    function addNewAlbum() {
        dispatch({ type: OPEN_MODAL });
    }

    function handleModalClose() {
        dispatch({ type: CLOSE_MODAL });
    }

    return (
        <section>
            <h1>Albumy</h1>
            <div
                className="album_card_grid"
                style={albums.length !== 0 ? styles : {}}
                onClick={addNewAlbum}
            >
                <Modal isOpen={state.isModalOpen} onClose={handleModalClose}>
                    <p>This is a modal.</p>
                </Modal>
                <div className="album_card album_card--add">
                    <div className="album_card__cover">+</div>
                    <p className="album_card__title">Dodaj nowy</p>
                </div>

                {albums.length !== 0 &&
                    albums.map((album) => <Album album={album} key={album.id} />)}
            </div>
        </section>
    );
}

export default AlbumsSection;
