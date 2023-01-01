import ControlledTextField from "../../fields/ControlledTextField.jsx";
import { Button, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { initialAlbum } from "../../initialFormData.js";
import { useFieldArray } from "react-hook-form";

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

function CD({ cdIndex, control, deleteCD, disableDelete }) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: `plyty[${cdIndex}].utwory`,
    });
    const plyta = `plyty[${cdIndex}]`;

    return (
        <Stack spacing={1.5}>
            <header>
                <Stack direction="row" alignItems="center" width="100%">
                    <h2 style={{ flexGrow: 1 }}>💿 CD {cdIndex + 1}</h2>
                    <Button color="error" onClick={deleteCD} disabled={disableDelete}>
                        Usuń płytę
                    </Button>
                </Stack>
            </header>
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
                            errorParams={{ index: idx, cd: cdIndex }}
                            helper={nazwaGetErrors}
                            helperTextParams={{ index: idx, cd: cdIndex }}
                        />
                    </Grid>
                    <Grid xs={3}>
                        <ControlledTextField
                            name={`${plyta}.utwory[${idx}].dlugosc`}
                            label="Długość"
                            textFieldProps={{ fullWidth: true }}
                            error={dlugoscHasErrors}
                            errorParams={{ index: idx, cd: cdIndex }}
                            helper={dlugoscGetErrors}
                            helperTextParams={{ index: idx, cd: cdIndex }}
                        />
                    </Grid>
                </Grid>
            ))}
            <Grid container columnSpacing={1.5}>
                <Grid>
                    <Button
                        variant="contained"
                        onClick={() =>
                            append({
                                ...initialAlbum.plyty[0].utwory[0],
                                numer: `${fields.length + 1}`.padStart(2, "0"),
                            })
                        }
                    >
                        Dodaj utwór
                    </Button>
                </Grid>
                <Grid>
                    <Button
                        disabled={fields.length === 1}
                        onClick={() => remove(fields.length - 1)}
                    >
                        Usuń ostatni utwór
                    </Button>
                </Grid>
            </Grid>
        </Stack>
    );
}

export default CD;
