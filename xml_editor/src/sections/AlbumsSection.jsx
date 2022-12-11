import Album from "../components/Album";
import "./AlbumsSection.css";

function AlbumsSection({ albums }) {
    return (
        <section>
            <h1>Albumy</h1>
            <div className="album_card_grid">
                {albums.map((album) => (
                    <Album album={album} key={album.id} />
                ))}
            </div>
        </section>
    );
}

export default AlbumsSection;
