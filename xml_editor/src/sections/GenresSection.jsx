import Pill from "../components/Pill";
import { useContext } from "react";
import { StateContext } from "../contexts/StateContext.jsx";
import { ADD_GENRE } from "../reducers/AppReducer.js";

function GenresSection({ genres }) {
    const { dispatch } = useContext(StateContext);

    function addNewGenre() {
        const genre = prompt("Podaj nazwe gatunku")
        if (genre === null) return;

        dispatch({
            type: ADD_GENRE,
            payload: genre
        });
    }

    return (
        <section>
            <h1>Gatunki</h1>
            <div className="flex flex-wrap gap-2">
              <Pill text="Dodaj gatunek +" onClick={addNewGenre} />
                {genres.length !== 0 &&
                    genres.map((genre) => {
                        return <Pill key={genre.id} idx={genre.id} text={genre.nazwa} />;
                    }
                )}
            </div>
        </section>
    );
}

export default GenresSection;
