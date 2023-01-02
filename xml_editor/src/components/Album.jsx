import "./Album.css";
import dayjs from "dayjs";

function Album({ album, onClick }) {
    return (
        <div className="album_card" onClick={onClick}>
            <img
                className="album_card__cover"
                src={album.okladka}
                loading="lazy"
                alt={`Okladka albumu ${album.nazwa}`}
            />
            <p className="album_card__title">{album.nazwa}</p>
            <p className="album_card__info">
                <span>{dayjs(album.dataPremiery).format("YYYY")}</span>
                <span>{album.ocena} &#x2605;</span>
            </p>
        </div>
    );
}

export default Album;
