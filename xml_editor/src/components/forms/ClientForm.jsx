import { Button, Tab, Tabs, ThemeProvider } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientSchema } from "../../xml/schemas/klient.js";
import { appMaterialTheme } from "./theme.js";
import { useContext, useState } from "react";
import { StateContext } from "../../contexts/StateContext.jsx";
import { FormContext } from "../../contexts/FormContext.jsx";
import { CLIENT_ADD, CLIENT_DELETE, CLIENT_UPDATE } from "../../reducers/AppReducer.js";
import "../Form.css";
import { initialClient } from "./initialFormData.js";
import ClientRentTab from "./tabs/klient/ClientRentTab.jsx";
import ClientDataTab from "./tabs/klient/ClientDataTab.jsx";
import { a11yProps } from "./tabs/TabPanel.jsx";

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

    const handleTabChange = (event, newTab) => {
        setSelectedTab(newTab);
    };

    const deleteClient = (clientId) => {
        dispatch({ type: CLIENT_DELETE, payload: { id: clientId } });
        onSubmit();
    };

    const handleFormSubmit = (data) => {
        if (client) {
            dispatch({
                type: CLIENT_UPDATE,
                payload: {
                    id: client.pesel,
                    data: data,
                },
            });
        } else {
            dispatch({ type: CLIENT_ADD, payload: data });
        }
        onSubmit();
    };

    function isFormDataValid() {
        return Object.keys(errors).length === 0;
    }

    return (
        <FormContext.Provider value={{ control, errors }}>
            <ThemeProvider theme={appMaterialTheme}>
                <form className="form__client" onSubmit={handleSubmit(handleFormSubmit)}>
                    <Tabs
                        orientation="horizontal"
                        value={selectedTab}
                        onChange={handleTabChange}
                        sx={{ marginBottom: "1rem" }}
                    >
                        <Tab label="Dane" {...a11yProps(0)} />
                        <Tab label="Wypożyczenia" {...a11yProps(1)} />
                    </Tabs>

                    <ClientDataTab currentIndex={selectedTab} tabIndex={0} />
                    <ClientRentTab currentIndex={selectedTab} tabIndex={1} />

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
        </FormContext.Provider>
    );
}

export default ClientForm;
