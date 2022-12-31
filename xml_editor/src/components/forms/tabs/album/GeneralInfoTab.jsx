import { Grid, MenuItem, Stack } from "@mui/material";
import ControlledTextField from "../../fields/ControlledTextField.jsx";
import TabPanel from "../TabPanel.jsx";
import { tabPropTypes } from "../propTypes.js";
import PropTypes from "prop-types";
import { useContext } from "react";
import { StateContext } from "../../../../contexts/StateContext.jsx";

function GeneralInfoTab({ currentIndex, tabIndex, coverWatch }) {
    const { state } = useContext(StateContext);

    return (
        <TabPanel currentIndex={currentIndex} tabIndex={tabIndex}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <img
                        className="form__album__image"
                        src={`./assets/covers/${coverWatch}`}
                        alt="Podgląd okładki albumu"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Stack spacing={1.5}>
                        <ControlledTextField name="id" textFieldProps={{ disabled: true }} />
                        <ControlledTextField name="gatunek" textFieldProps={{ select: true }}>
                            {state.xml.refs.gatunki.map((genre) => (
                                <MenuItem key={`SELECT_${genre.id}`} value={genre.id}>
                                    {genre.nazwa}
                                </MenuItem>
                            ))}
                        </ControlledTextField>
                        <ControlledTextField name="nazwa" placeholder="Podaj nazwę" />
                        <ControlledTextField name="okladka" placeholder="Podaj okładkę" />
                        <Grid container>
                            <Grid item xs={9}>
                                <ControlledTextField
                                    name="cena"
                                    label="Cena"
                                    placeholder="Podaj cenę"
                                    textFieldProps={{ type: "number", fullWidth: true }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <ControlledTextField
                                    name="waluta"
                                    placeholder="Podaj walutę"
                                    textFieldProps={{ select: true, fullWidth: true }}
                                >
                                    <MenuItem value="PLN">ZŁ</MenuItem>
                                    <MenuItem value="USD">$</MenuItem>
                                    <MenuItem value="EUR">€</MenuItem>
                                </ControlledTextField>
                            </Grid>
                        </Grid>
                        <ControlledTextField
                            name="ocena"
                            placeholder="Podaj ocenę"
                            textFieldProps={{ type: "number" }}
                        />
                    </Stack>
                </Grid>
            </Grid>
        </TabPanel>
    );
}

GeneralInfoTab.propTypes = {
    ...tabPropTypes,
    coverWatch: PropTypes.string.isRequired,
};

export default GeneralInfoTab;
