import "./Album.css";

function Album({ album, onClick }) {
    return (
        <div className="album_card" onClick={onClick}>
            <img
                className="album_card__cover"
                src={`./assets/covers/${album.okladka}`}
                alt={`Okladka albumu ${album.nazwa}`}
            />
            <p className="album_card__title">{album.nazwa}</p>
            <p className="album_card__info">
                <span>{album.dataPremiery}</span>
                <span>{album.ocena} &#x2605;</span>
            </p>
        </div>
    );
}

export default Album;
