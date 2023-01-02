import { tabPropTypes } from "../propTypes.js";
import TabPanel from "../TabPanel.jsx";
import { Grid, Stack } from "@mui/material";
import ControlledTextField from "../../fields/ControlledTextField.jsx";

ClientDataTab.propTypes = tabPropTypes;

function ClientDataTab({ currentIndex, tabIndex, disablePeselEdition }) {
    return (
        <TabPanel currentIndex={currentIndex} tabIndex={tabIndex}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Stack spacing={1.5}>
                        <ControlledTextField
                            name="pesel"
                            label="PESEL / NIP"
                            placeholder="Podaj PESEL lub NIP"
                            textFieldProps={{ disabled: disablePeselEdition }}
                        />
                        <ControlledTextField name="imie" label="Imię" placeholder="Podaj imię" />
                        <ControlledTextField name="nazwisko" placeholder="Podaj nazwisko" />
                        <ControlledTextField name="login" placeholder="Podaj login" />
                    </Stack>
                </Grid>
            </Grid>
        </TabPanel>
    );
}

export default ClientDataTab;
