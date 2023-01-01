import ControlledTextField from "../../fields/ControlledTextField.jsx";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function nazwaHasErrors(field, errors, params) {
    const { cd, index } = params;

    try {
        return (
            !!errors.plyty &&
            !!errors.plyty[cd].utwory &&
            Object.keys({
                ...errors?.plyty[cd]?.utwory[index],
            }).indexOf("nazwa") !== -1
        );
    } catch (e) {}
}

function nazwaGetErrors(field, errors, params) {
    const { cd, index } = params;

    return errors.plyty[cd].utwory[index].nazwa.message;
}

function dlugoscHasErrors(field, errors, params) {
    const { cd, index } = params;

    try {
        return (
            !!errors.plyty &&
            !!errors.plyty[cd].utwory &&
            Object.keys({
                ...errors?.plyty[cd]?.utwory[index],
            }).indexOf("dlugosc") !== -1
        );
    } catch (e) {}
}

function dlugoscGetErrors(field, errors, params) {
    const { cd, index } = params;

    return errors.plyty[cd].utwory[index].dlugosc.message;
}

function CD({ cd, utworyFieldArray }) {
    const { fields } = utworyFieldArray;
    const plyta = `plyty[${cd - 1}]`;

    return (
        <Stack spacing={1.5}>
            <h2>💿 CD {cd}</h2>
            {fields.map((field, idx) => (
                <Grid container columnSpacing={1} key={`${plyta}_utwory${idx}`}>
                    <Grid xs={2}>
                        <ControlledTextField
                            name={`${plyta}.utwory[${idx}].numer`}
                            label="Numer"
                            textFieldProps={{ disabled: true, fullWidth: true }}
                        />
                    </Grid>
                    <Grid xs={7}>
                        <ControlledTextField
                            name={`${plyta}.utwory[${idx}].nazwa`}
                            label="Nazwa"
                            textFieldProps={{ fullWidth: true }}
                            error={nazwaHasErrors}
                            errorParams={{ index: idx, cd: cd - 1 }}
                            helper={nazwaGetErrors}
                            helperTextParams={{ index: idx, cd: cd - 1 }}
                        />
                    </Grid>
                    <Grid xs={3}>
                        <ControlledTextField
                            name={`${plyta}.utwory[${idx}].dlugosc`}
                            label="Długość"
                            textFieldProps={{ fullWidth: true }}
                            error={dlugoscHasErrors}
                            errorParams={{ index: idx, cd: cd - 1 }}
                            helper={dlugoscGetErrors}
                            helperTextParams={{ index: idx, cd: cd - 1 }}
                        />
                    </Grid>
                </Grid>
            ))}
        </Stack>
    );
}

export default CD;
