import Album from "../components/Album";
import "./AlbumsSection.css";
import Modal from "../components/Modal.jsx";
import { useContext, useState } from "react";
import { StateContext } from "../contexts/StateContext.jsx";
import { CLOSE_MODAL, OPEN_MODAL } from "../reducers/AppReducer.js";

function AlbumsSection({ albums }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { dispatch } = useContext(StateContext);

    const styles = {
        justifyContent: "space-evenly",
    };

    function openModal() {
        setIsModalOpen(true);
        dispatch({ type: OPEN_MODAL });
    }

    function closeModal() {
        setIsModalOpen(false);
        dispatch({ type: CLOSE_MODAL });
    }

    return (
        <section>
            <h1>Albumy</h1>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <p>This is a modal.</p>
            </Modal>
            <div className="album_card_grid" style={albums.length !== 0 ? styles : {}}>
                <div className="album_card album_card--add" onClick={openModal}>
                    <div className="album_card__cover">+</div>
                    <p className="album_card__title">Dodaj nowy album</p>
                </div>

                {albums.length !== 0 &&
                    albums.map((album) => <Album album={album} key={album.id} />)}
            </div>
        </section>
    );
}

export default AlbumsSection;
