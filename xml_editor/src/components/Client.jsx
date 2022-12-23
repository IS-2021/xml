import "./Client.css";

function Client({ client, onClick }) {
    return (
        <div className="client_card" onClick={() => onClick(client.pesel)}>
            <p className="client_card__name">
                {client.imie} {client.nazwisko}
            </p>
            <p className="client_card__nick">{client.login}</p>

            <p className="client_card__rent_count">{client.wypozyczenia.length} wypożyczenia</p>
        </div>
    );
}

export default Client;
