import Client from "../components/Client";
import Modal from "../components/Modal.jsx";
import ClientForm from "../components/forms/ClientForm.jsx";
import "./ClientsSection.css";
import { useModalWithDispatch } from "../hooks/useModalWithDispatch.js";
import { useState } from "react";

function ClientsSection({ clients }) {
    const [modalTitle, setModalTitle] = useState("");
    const [selectedClient, setSelectedClient] = useState(null);
    const { isModalOpen, openModal, closeModal } = useModalWithDispatch(false);

    function getClientByPesel(pesel) {
        return clients.filter((client) => client.pesel === pesel)[0];
    }

    return (
        <section>
            <h1>Klienci</h1>

            <Modal
                title={modalTitle}
                className="client_add_modal"
                isOpen={isModalOpen}
                onClose={closeModal}
            >
                <ClientForm onSubmit={closeModal} client={selectedClient} />
            </Modal>

            <div className="client_card_grid">
                <div
                    className="client_card client_card--add"
                    onClick={() => {
                        setModalTitle("Dodaj klienta");
                        setSelectedClient(null);
                        openModal();
                    }}
                >
                    <p>
                        <span className="client_card__plus">+</span>
                    </p>
                    <p className="client_card__name">Dodaj klienta</p>
                </div>

                {clients.map((client, idx) => (
                    <Client
                        key={`${idx}${client.pesel}`}
                        client={client}
                        onClick={(pesel) => {
                            setModalTitle("Edytuj klienta");
                            setSelectedClient(getClientByPesel(pesel));
                            openModal();
                        }}
                    />
                ))}
            </div>
        </section>
    );
}

export default ClientsSection;
