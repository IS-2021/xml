import { Button, Grid, Stack, TextField, ThemeProvider } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { genreSchema } from "../xml/schemas/gatunek.js";
import { appMaterialTheme } from "./theme.js";
import { createGatunekElement } from "../xml/datatypes/Gatunek.js";
import { useContext } from "react";
import { StateContext } from "../contexts/StateContext.jsx";
import {
    GENRE_ADD,
    GENRE_UPDATE,
    GENRE_DELETE,
    CLIENT_ADD,
    CLIENT_UPDATE,
    CLIENT_DELETE,
} from "../reducers/AppReducer.js";
import { initialGenre } from "./initialFormData.js";
import { DevTool } from "@hookform/devtools";
import "./Form.css";

function GenreForm({ onSubmit, genre, nextId }) {
    const { dispatch } = useContext(StateContext);

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
            addGenre(createGatunekElement(data.id, data.nazwa));
        }
        onSubmit();
    };

    function isFormDataValid() {
        return Object.keys(errors).length === 0;
    }

    return (
        <ThemeProvider theme={appMaterialTheme}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Stack spacing={1.5}>
                            <Controller
                                name="id"
                                control={control}
                                render={({ field }) => (
                                    <TextField {...field} label="ID" disabled={true} />
                                )}
                            />
                            <Controller
                                name="nazwa"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Nazwa"
                                        placeholder="Podaj nazwę"
                                        error={field.isDirty || !!errors[field.name]}
                                        helperText={
                                            field.isDirty || !!errors[field.name]
                                                ? errors[field.name].message
                                                : ""
                                        }
                                    />
                                )}
                            />
                        </Stack>
                    </Grid>
                </Grid>

                <div className="form__buttons">
                    {!genre && (
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            disabled={!isFormDataValid()}
                        >
                            Dodaj gatunek
                        </Button>
                    )}
                    {genre && (
                        <>
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                disabled={!isFormDataValid()}
                            >
                                Zapisz zmiany
                            </Button>
                            <Button
                                fullWidth
                                variant="outlined"
                                color="error"
                                onClick={() => deleteGenre(genre.id)}
                            >
                                Usuń gatunek
                            </Button>
                        </>
                    )}
                </div>
                <DevTool control={control} />
            </form>
        </ThemeProvider>
    );
}

export default GenreForm;
