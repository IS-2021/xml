import { Grid, MenuItem, Stack } from "@mui/material";
import ControlledTextField from "../../fields/ControlledTextField.jsx";
import { ALBUM_CASE_TYPES } from "../../../../xml/schemas/album.js";
import ControlledDatePicker from "../../fields/ControlledDatePicker.jsx";
import TabPanel from "../TabPanel.jsx";
import { tabPropTypes } from "../propTypes.js";

function ProductionTab({ currentIndex, tabIndex }) {
    return (
        <TabPanel currentIndex={currentIndex} tabIndex={tabIndex}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Stack spacing={1.5}>
                        <ControlledTextField name="producent" placeholder="Podaj producenta" />
                        <ControlledTextField name="dystrybutor" placeholder="Podaj dystrybutora" />
                        <ControlledTextField
                            name="opakowanie"
                            placeholder="Podaj opakowanie"
                            textFieldProps={{ select: true }}
                        >
                            {ALBUM_CASE_TYPES.map((caseType) => (
                                <MenuItem key={caseType} value={caseType}>
                                    {caseType}
                                </MenuItem>
                            ))}
                        </ControlledTextField>
                        <ControlledDatePicker
                            name="dataPremiery"
                            label="Data premiery"
                            placeholder="Podaj datę premiery"
                        />
                        <ControlledTextField
                            name="naklad"
                            placeholder="Podaj nakład"
                            textFieldProps={{ type: "number" }}
                        />
                        <ControlledTextField
                            name="sprzedaneEgzemplarze"
                            label="Sprzedano"
                            placeholder="Podaj ile albumów sprzedano"
                            textFieldProps={{ type: "number" }}
                        />
                    </Stack>
                </Grid>
            </Grid>
        </TabPanel>
    );
}

ProductionTab.propTypes = tabPropTypes;

export default ProductionTab;
