import Client from "../components/Client";
import { useContext, useState } from "react";
import { StateContext } from "../contexts/StateContext.jsx";
import Modal from "../components/Modal.jsx";
import AddClientForm from "../components/AddClientForm.jsx";
import { CLOSE_MODAL, OPEN_MODAL } from "../reducers/AppReducer.js";
import "./ClientsSection.css";

function ClientsSection({ clients }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { dispatch } = useContext(StateContext);

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
            <h1>Klienci</h1>

            <Modal
                title="Dodaj klienta"
                className="client_add_modal"
                isOpen={isModalOpen}
                onClose={closeModal}
            >
                <AddClientForm />
            </Modal>

            <div className="client_card_grid">
                <div className="client_card client_card--add" onClick={openModal}>
                    <p>
                        <span className="client_card__plus">+</span>
                    </p>
                    <p className="client_card__name">Dodaj klienta</p>
                </div>

                {clients.map((client) => (
                    <Client key={client.pesel} client={client} />
                ))}
            </div>
        </section>
    );
}

export default ClientsSection;
