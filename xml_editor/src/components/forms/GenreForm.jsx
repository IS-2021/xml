import { Button, Stack, ThemeProvider, Tooltip } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { genreSchema } from "../../xml/schemas/gatunek.js";
import { appMaterialTheme } from "./theme.js";
import { useContext } from "react";
import { StateContext } from "../../contexts/StateContext.jsx";
import { FormContext } from "../../contexts/FormContext.jsx";
import { GENRE_ADD, GENRE_UPDATE, GENRE_DELETE } from "../../reducers/AppReducer.js";
import { initialGenre } from "./initialFormData.js";
import "../Form.css";
import ControlledTextField from "./fields/ControlledTextField.jsx";
import Grid from "@mui/material/Unstable_Grid2";

function GenreForm({ onSubmit, genre, nextId }) {
    const { state, dispatch } = useContext(StateContext);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all",
        reValidateMode: "onChange",
        resolver: zodResolver(genreSchema),
        defaultValues: { ...initialGenre, ...{ id: nextId }, ...(genre || {}) },
    });

    if (genre) {
        var disableDelete =
            state.xml.refs.albumy.filter((al) => al.gatunek === genre.id).length > 0;
    }

    const addGenre = (genre) => {
        dispatch({ type: GENRE_ADD, payload: genre });
    };

    const updateGenre = (genreId, genre) => {
        dispatch({
            type: GENRE_UPDATE,
            payload: {
                id: genreId,
                data: genre,
            },
        });
        onSubmit();
    };

    const deleteGenre = (genreId) => {
        dispatch({ type: GENRE_DELETE, payload: { id: genreId } });
        onSubmit();
    };

    const handleFormSubmit = (data) => {
        if (genre) {
            updateGenre(genre.id, data);
        } else {
            addGenre({ id: data.id, nazwa: data.nazwa });
        }
        onSubmit();
    };

    function isFormDataValid() {
        return Object.keys(errors).length === 0;
    }

    return (
        <FormContext.Provider value={{ control, errors }}>
            <ThemeProvider theme={appMaterialTheme}>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <Grid container spacing={2}>
                        <Grid xs={12}>
                            <Stack spacing={1.5}>
                                <ControlledTextField
                                    name="id"
                                    textFieldProps={{
                                        disabled: true,
                                    }}
                                />
                                <ControlledTextField name="nazwa" placeholder="Podaj nazwę" />
                            </Stack>
                        </Grid>
                    </Grid>

                    <Grid container columnSpacing={1} sx={{ marginTop: "1rem" }}>
                        {!genre && (
                            <Grid xs={12}>
                                <Button
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    disabled={!isFormDataValid()}
                                >
                                    Dodaj gatunek
                                </Button>
                            </Grid>
                        )}
                        {genre && (
                            <>
                                <Grid xs={6}>
                                    <Button
                                        fullWidth
                                        type="submit"
                                        variant="contained"
                                        disabled={!isFormDataValid()}
                                    >
                                        Zapisz zmiany
                                    </Button>
                                </Grid>
                                <Grid xs={6}>
                                    <Tooltip
                                        title={disableDelete && "Gatunek posiada przypisane utwory"}
                                        style={{ width: "100%" }}
                                    >
                                        <div>
                                            <Button
                                                fullWidth
                                                variant="outlined"
                                                color="error"
                                                disabled={disableDelete}
                                                onClick={() => deleteGenre(genre.id)}
                                            >
                                                Usuń gatunek
                                            </Button>
                                        </div>
                                    </Tooltip>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </form>
            </ThemeProvider>
        </FormContext.Provider>
    );
}

export default GenreForm;
