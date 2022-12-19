import Client from "../components/Client";
import "./ClientsSection.css";

function ClientsSection({ clients }) {
    return (
        <section>
            <h1>Klienci</h1>
            <div className="client_card_grid">
                <div className="client_card client_card--add">
                    <p><span className="client_card__plus">+</span></p>
                    <p className="client_card__name">
                        Dodaj klienta
                    </p>
                </div>

                {clients.map((client) => (
                    <Client key={client.pesel} client={client} />
                ))}
            </div>
        </section>
    );
}

export default ClientsSection;
