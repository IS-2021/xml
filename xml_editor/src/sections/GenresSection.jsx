import Pill from "../components/Pill";

function GenresSection({ genres }) {
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
              <Pill key="GEN_unique" text="Dodaj gatunek +" />
            </div>
        </section>
    );
}

export default GenresSection;
