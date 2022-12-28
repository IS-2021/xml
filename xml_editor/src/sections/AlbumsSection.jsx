import Album from "../components/Album";
import "./AlbumsSection.css";
import Modal from "../components/Modal.jsx";
import { useModalWithDispatch } from "../hooks/useModalWithDispatch.js";
import { useContext, useState } from "react";
import AlbumForm from "../components/AlbumForm.jsx";
import { StateContext } from "../contexts/StateContext.jsx";

function AlbumsSection({ albums }) {
    const { state } = useContext(StateContext);
    const [modalTitle, setModalTitle] = useState("");
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const { isModalOpen, openModal, closeModal } = useModalWithDispatch(false);

    const styles = {
        justifyContent: "space-evenly",
    };

    function getNextGenreId() {
        const albums = state.xml.refs.albumy;
        if (!albums.length) return "AL_01";

        const nextId = String(Number(albums[albums.length - 1].node.id.replace("AL_", "")) + 1);
        return `AL_${nextId.padStart(2, "0")}`;
    }

    function getAlbumById(id) {
        return albums.filter((album) => album.id === id)[0];
    }

    return (
        <section>
            <Modal title={modalTitle} isOpen={isModalOpen} onClose={closeModal}>
                <AlbumForm album={selectedAlbum} nextId={getNextGenreId()} onSubmit={closeModal} />
            </Modal>

            <h1>Albumy</h1>
            <div className="album_card_grid" style={albums.length !== 0 ? styles : {}}>
                <div
                    className="album_card album_card--add"
                    onClick={() => {
                        setModalTitle("Dodaj album");
                        setSelectedAlbum(null);
                        openModal();
                    }}
                >
                    <div className="album_card__cover">+</div>
                    <p className="album_card__title">Dodaj nowy album</p>
                </div>

                {albums.length !== 0 &&
                    albums.map((album) => (
                        <Album
                            album={album}
                            key={album.id}
                            onClick={() => {
                                setModalTitle("Edytuj album");
                                setSelectedAlbum(getAlbumById(album.id).toObject());
                                openModal();
                            }}
                        />
                    ))}
            </div>
        </section>
    );
}

export default AlbumsSection;
