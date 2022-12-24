import Pill from "../components/Pill";
import { useContext, useState } from "react";
import { StateContext } from "../contexts/StateContext.jsx";
import { GENRE_ADD } from "../reducers/AppReducer.js";
import { useModalWithDispatch } from "../hooks/useModalWithDispatch.js";
import Modal from "../components/Modal.jsx";
import GenreForm from "../components/GenreForm.jsx";

function GenresSection({ genres }) {
    const [modalTitle, setModalTitle] = useState("");
    const [selectedGenre, setSelectedGenre] = useState(null);
    const { isModalOpen, openModal, closeModal } = useModalWithDispatch(false);
    const { state, dispatch } = useContext(StateContext);

    const getNextGenreId = () => {
        const nextId = String(state.xml.refs.gatunkiCount + 1 || 0);
        return `GAT_${nextId.padStart(2, "0")}`;
    };

    function getGenreById(id) {
        console.log(id);
        return genres.filter((genre) => genre.id === id)[0];
    }

    return (
        <section>
            <Modal title={modalTitle} isOpen={isModalOpen} onClose={closeModal}>
                <GenreForm genre={selectedGenre} nextId={getNextGenreId()} onSubmit={closeModal} />
            </Modal>

            <h1>Gatunki</h1>
            <div className="flex flex-wrap gap-2">
                <Pill
                    text="Dodaj gatunek +"
                    onClick={() => {
                        setModalTitle("Dodaj gatunek");
                        setSelectedGenre(null);
                        openModal();
                    }}
                />
                {genres.length !== 0 &&
                    genres.map((genre) => {
                        return (
                            <Pill
                                key={genre.id}
                                idx={genre.id}
                                text={genre.nazwa}
                                onClick={() => {
                                    setModalTitle("Edytuj gatunek");
                                    setSelectedGenre(getGenreById(genre.id).toObject());
                                    openModal();
                                }}
                            />
                        );
                    })}
            </div>
        </section>
    );
}

export default GenresSection;
