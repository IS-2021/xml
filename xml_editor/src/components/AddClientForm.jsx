import { Button, Stack, TextField, ThemeProvider } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientSchema } from "../xml/schemas/klient.js";
import { appMaterialTheme } from "./theme.js";
import { createKlientElement } from "../xml/datatypes/Klient.js";
import { useContext } from "react";
import { StateContext } from "../contexts/StateContext.jsx";
import { CLIENT_ADD } from "../reducers/AppReducer.js";

function AddClientForm({ onSubmit }) {
    const { dispatch } = useContext(StateContext);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all",
        reValidateMode: "onChange",
        resolver: zodResolver(clientSchema),
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
                <Stack spacing={1.5}>
                    <Controller
                        name="imie"
                        control={control}
                        defaultValue=""
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
                        defaultValue=""
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
                        defaultValue=""
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
                        defaultValue=""
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

                    <Button
                        type="submit"
                        variant="contained"
                        disabled={Object.keys(errors).length !== 0}
                    >
                        Dodaj klienta
                    </Button>
                </Stack>
            </form>
        </ThemeProvider>
    );
}

export default AddClientForm;
