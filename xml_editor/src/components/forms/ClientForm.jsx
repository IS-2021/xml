import { Button, Tab, Tabs, ThemeProvider } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientSchema } from "../../xml/schemas/klient.js";
import { appMaterialTheme } from "./theme.js";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../contexts/StateContext.jsx";
import { FormContext } from "../../contexts/FormContext.jsx";
import { CLIENT_ADD, CLIENT_DELETE, CLIENT_UPDATE } from "../../reducers/AppReducer.js";
import "../Form.css";
import { initialClient } from "./initialFormData.js";
import ClientRentTab from "./tabs/klient/ClientRentTab.jsx";
import ClientDataTab from "./tabs/klient/ClientDataTab.jsx";
import { a11yProps } from "./tabs/TabPanel.jsx";

function ClientForm({ onSubmit, client }) {
    const { state, dispatch } = useContext(StateContext);
    const [selectedTab, setSelectedTab] = useState(0);
    const [peselIsUnique, setPeselIsUnique] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
        getValues,
    } = useForm({
        mode: "all",
        reValidateMode: "onChange",
        resolver: zodResolver(clientSchema),
        defaultValues: { ...initialClient, ...(client || {}) },
    });

    const handleTabChange = (event, newTab) => {
        setSelectedTab(newTab);
    };

    useEffect(() => {
        validatePesel();
    }, [getValues("pesel")]);

    const deleteClient = (clientId) => {
        dispatch({ type: CLIENT_DELETE, payload: { id: clientId } });
        onSubmit();
    };

    const handleFormSubmit = (data) => {
        if (!checkPeselUniqueness()) return;

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

    function checkPeselUniqueness() {
        const inputPesel = getValues("pesel");

        // Editing the same client
        if (client?.pesel === inputPesel) return true;

        // Adding new client
        const arr = state.xml.refs.klienci;
        return arr.filter((klient) => klient.pesel === inputPesel).length < 1;
    }

    function validatePesel() {
        const isUnique = checkPeselUniqueness();

        setPeselIsUnique(isUnique);
        if (isUnique) return;

        setError("pesel", { type: "custom", message: "PESEL/NIP nie jest unikalny" });
    }

    function isFormDataValid() {
        return Object.keys(errors).length === 0 && peselIsUnique;
    }

    return (
        <FormContext.Provider value={{ control, errors }}>
            <ThemeProvider theme={appMaterialTheme}>
                <form className="form__client" onSubmit={handleSubmit(handleFormSubmit)}>
                    {client && (
                        <Tabs
                            orientation="horizontal"
                            value={selectedTab}
                            onChange={handleTabChange}
                            sx={{ marginBottom: "1rem" }}
                        >
                            <Tab label="Dane" {...a11yProps(0)} />
                            <Tab label="Wypożyczenia" {...a11yProps(1)} />
                        </Tabs>
                    )}

                    <ClientDataTab
                        currentIndex={selectedTab}
                        disablePeselEdition={!!client}
                        tabIndex={0}
                    />
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
