import Pill from "../components/Pill";

function GenresSection({ genres, addGenre }) {
    function addNewGenre() {
        const genre = prompt("Podaj nazwe gatunku")
        if (genre === null) return;

        addGenre(genre);
    }

    return (
        <section>
            <h1>Gatunki</h1>
            <div className="flex flex-wrap gap-2">
                {genres.length === 0 ? (
                    <p>Brak gatunkow</p>
                ) : (
                    genres.map((genre) => {
                        return <Pill key={genre.id} idx={genre.id} text={genre.nazwa} />;
                    })
                )}
              <Pill text="Dodaj gatunek +" onClick={addNewGenre} />
            </div>
        </section>
    );
}

export default GenresSection;
