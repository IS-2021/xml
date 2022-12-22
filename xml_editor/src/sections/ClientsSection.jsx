import Client from "../components/Client";
import Modal from "../components/Modal.jsx";
import AddClientForm from "../components/AddClientForm.jsx";
import "./ClientsSection.css";
import { useModalWithDispatch } from "../hooks/useModalWithDispatch.js";

function ClientsSection({ clients }) {
    const { isModalOpen, openModal, closeModal } = useModalWithDispatch(false);

    return (
        <section>
            <h1>Klienci</h1>

            <Modal
                title="Dodaj klienta"
                className="client_add_modal"
                isOpen={isModalOpen}
                onClose={closeModal}
            >
                <AddClientForm onSubmit={closeModal} />
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
