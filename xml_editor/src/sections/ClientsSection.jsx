import Client from "../components/Client";
import { useContext } from "react";
import { StateContext } from "../contexts/StateContext.jsx";
import Modal from "../components/Modal.jsx";
import AddClientForm from "../components/AddClientForm.jsx";
import { OPEN_MODAL } from "../reducers/AppReducer.js";
import "./ClientsSection.css";

function ClientsSection({ clients }) {
    const { dispatch } = useContext(StateContext);

    function showAddClientForm() {
        dispatch({ type: OPEN_MODAL });
    }

    return (
        <section>
            <h1>Klienci</h1>

            <Modal title="Dodaj klienta" className="client_add_modal">
                <AddClientForm />
            </Modal>

            <div className="client_card_grid">
                <div className="client_card client_card--add" onClick={showAddClientForm}>
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
