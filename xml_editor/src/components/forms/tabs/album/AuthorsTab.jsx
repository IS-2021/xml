import { Box, Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import ControlledTextField from "../../fields/ControlledTextField.jsx";
import { Controller } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import AddIcon from "@mui/icons-material/Add";
import TabPanel from "../TabPanel.jsx";
import { tabPropTypes } from "../propTypes.js";
import PropTypes from "prop-types";
import { useContext } from "react";
import { FormContext } from "../../../../contexts/FormContext.jsx";
import { initialAlbum } from "../../initialFormData.js";

function authorFieldHasErrors(field, errors, params) {
    const { index } = params;
    return (
        field.isDirty ||
        (!!errors.wykonawcy &&
            Object.keys({
                ...errors.wykonawcy[index],
            }).indexOf("nazwa") !== -1)
    );
}

function getAuthorFieldError(field, errors, params) {
    return errors.wykonawcy[params.index].nazwa.message;
}

function AuthorsTab({ currentIndex, tabIndex, wykonawcyFieldArray }) {
    const { control } = useContext(FormContext);
    const { fields, append, remove } = wykonawcyFieldArray;

    return (
        <TabPanel currentIndex={currentIndex} tabIndex={tabIndex}>
            <Box sx={{ height: 408, width: "100%" }}>
                <Grid spacing={1.5} container direction="column">
                    {fields.map((wykonawca, idx) => (
                        <Grid item key={`TabPanel1_${wykonawca.nazwa}${idx}`}>
                            <Grid container alignItems="center" columnSpacing={2}>
                                <Grid item>
                                    <ControlledTextField
                                        name={`wykonawcy[${idx}].nazwa`}
                                        label="Wykonawca"
                                        placeholder="Podaj wykonawcę"
                                        textFieldProps={{ fullWidth: true }}
                                        error={authorFieldHasErrors}
                                        errorParams={{ index: idx }}
                                        helper={getAuthorFieldError}
                                        helperTextParams={{ index: idx }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Controller
                                        name={`wykonawcy[${idx}].czyZagraniczny`}
                                        control={control}
                                        render={({ field }) => (
                                            <FormGroup>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            {...field}
                                                            checked={field.value}
                                                        />
                                                    }
                                                    label="Zagraniczny"
                                                />
                                            </FormGroup>
                                        )}
                                    />
                                </Grid>
                                <Grid item>
                                    {fields.length > 1 && (
                                        <DeleteIcon onClick={() => remove(idx)} />
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                    <Grid item>
                        <div onClick={() => append(initialAlbum.wykonawcy[0])}>
                            <AddIcon />
                            Dodaj wykonawcę
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </TabPanel>
    );
}

AuthorsTab.propTypes = {
    ...tabPropTypes,
    wykonawcyFieldArray: PropTypes.object.isRequired,
};

export default AuthorsTab;
