import { Button, Grid, Stack, ThemeProvider } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientSchema } from "../xml/schemas/klient.js";
import { appMaterialTheme } from "./theme.js";
import { createKlientElement } from "../xml/datatypes/Klient.js";
import { useContext } from "react";
import { StateContext } from "../contexts/StateContext.jsx";
import { CLIENT_ADD, CLIENT_UPDATE, CLIENT_DELETE } from "../reducers/AppReducer.js";
import "./Form.css";
import { initialClient } from "./initialFormData.js";
import ControlledTextField from "./ControlledTextField.jsx";

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
        defaultValues: { ...initialClient, ...(client || {}) },
    });

    const addClient = (client) => {
        dispatch({ type: CLIENT_ADD, payload: client });
    };

    const updateClient = (clientId, client) => {
        dispatch({
            type: CLIENT_UPDATE,
            payload: {
                id: clientId,
                data: client,
            },
        });
        onSubmit();
    };

    const deleteClient = (clientId) => {
        dispatch({ type: CLIENT_DELETE, payload: { id: clientId } });
        onSubmit();
    };

    const handleFormSubmit = (data) => {
        if (client) {
            updateClient(client.pesel, data);
        } else {
            const clientElement = createKlientElement(data);
            addClient(clientElement);
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
                            <p className="form__header">Dane klienta</p>
                            <ControlledTextField
                                name="imie"
                                label="Imię"
                                placeholder="Podaj imię"
                                control={control}
                                errors={errors}
                            />
                            <ControlledTextField
                                name="nazwisko"
                                placeholder="Podaj nazwisko"
                                control={control}
                                errors={errors}
                            />
                            <ControlledTextField
                                name="pesel"
                                label="PESEL / NIP"
                                placeholder="Podaj PESEL lub NIP"
                                control={control}
                                errors={errors}
                            />
                            <ControlledTextField
                                name="login"
                                placeholder="Podaj login"
                                control={control}
                                errors={errors}
                            />
                        </Stack>
                    </Grid>
                </Grid>

                <div className="form__buttons">
                    {!client && (
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            disabled={!isFormDataValid()}
                        >
                            Dodaj klienta
                        </Button>
                    )}
                    {client && (
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
                                onClick={() => deleteClient(client.pesel)}
                            >
                                Usuń klienta
                            </Button>
                        </>
                    )}
                </div>
            </form>
        </ThemeProvider>
    );
}

export default ClientForm;
