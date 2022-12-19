import Album from "../components/Album";
import "./AlbumsSection.css";

function AlbumsSection({ albums }) {
    return (
        <section>
            <h1>Albumy</h1>
            <div className="album_card_grid">
                <div className="album_card album_card--add">
                    <div className="album_card__cover">+</div>
                    <p className="album_card__title">Dodaj nowy</p>
                </div>

                {albums.length !== 0 &&
                    albums.map((album) => <Album album={album} key={album.id} />)}
            </div>
        </section>
    );
}

export default AlbumsSection;
