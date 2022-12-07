import Pill from "../components/Pill";

function GenresSection({ genres }) {
    // let genresPills;

    // if (genres) {
    //     genresPills = genres.map((genre) => {
    //         return <Pill key={genre.id} text={genre.nazwa} />;
    //     });
    // }

    console.log(genres);

    return (
        <section>
            <h1>Gatunki</h1>
            <div className="flex flex-wrap gap-2">
                {genres.length === 0 ? (
                    <p>Brak gatunkow</p>
                ) : (
                    genres.map((genre) => {
                        const { gatunek } = genre;
                        return <Pill key={gatunek.id} text={gatunek.nazwa} />;
                    })
                )}
            </div>
        </section>
    );
}

export default GenresSection;
