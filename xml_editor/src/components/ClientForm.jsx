import { Button, Grid, Stack, TextField, ThemeProvider } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientSchema } from "../xml/schemas/klient.js";
import { appMaterialTheme } from "./theme.js";
import { createKlientElement } from "../xml/datatypes/Klient.js";
import { useContext } from "react";
import { StateContext } from "../contexts/StateContext.jsx";
import { CLIENT_ADD } from "../reducers/AppReducer.js";
import "./ClientForm.css";
import { initialClient } from "./initialFormData.js";

function ClientForm({ onSubmit, client }) {
    const { dispatch } = useContext(StateContext);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all",
        reValidateMode: "onChange",
        resolver: zodResolver(clientSchema),
        defaultValues: { ...initialClient, ...client },
    });

    const addClientToState = (client) => {
        dispatch({ type: CLIENT_ADD, payload: client });
    };

    const handleFormSubmit = (data) => {
        const clientElement = createKlientElement(data);
        addClientToState(clientElement);
        onSubmit();
    };

    return (
        <ThemeProvider theme={appMaterialTheme}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Stack spacing={1.5}>
                            <p className="section__header">Dane klienta</p>
                            <Controller
                                name="imie"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Imię"
                                        placeholder="Podaj imię"
                                        error={field.isDirty || !!errors[field.name]}
                                        helperText={
                                            field.isDirty || !!errors[field.name]
                                                ? errors[field.name].message
                                                : ""
                                        }
                                    />
                                )}
                            />
                            <Controller
                                name="nazwisko"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Nazwisko"
                                        placeholder="Podaj nazwisko"
                                        error={field.isDirty || !!errors[field.name]}
                                        helperText={
                                            field.isDirty || !!errors[field.name]
                                                ? errors[field.name].message
                                                : ""
                                        }
                                    />
                                )}
                            />
                            <Controller
                                name="pesel"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="PESEL / NIP"
                                        placeholder="Podaj PESEL lub NIP"
                                        error={field.isDirty || !!errors[field.name]}
                                        helperText={
                                            field.isDirty || !!errors[field.name]
                                                ? errors[field.name].message
                                                : ""
                                        }
                                    />
                                )}
                            />
                            <Controller
                                name="login"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Login"
                                        placeholder="Podaj login"
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

                <div className="client_form__buttons">
                    {/* TODO: Modify button */}
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        disabled={Object.keys(errors).length !== 0}
                    >
                        {client.pesel === "" ? "Dodaj klienta" : "Zapisz zmiany"}
                    </Button>
                </div>
            </form>
        </ThemeProvider>
    );
}

export default ClientForm;
