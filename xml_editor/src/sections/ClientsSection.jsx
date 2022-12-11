import Client from "../components/Client";
import "./ClientsSection.css";

function ClientsSection({ clients }) {
    return (
        <section>
            <h1>Klienci</h1>
            <div className="client_card_grid">
                {clients.map((client) => (
                    <Client key={client.pesel} client={client} />
                ))}
            </div>
        </section>
    );
}

export default ClientsSection;
