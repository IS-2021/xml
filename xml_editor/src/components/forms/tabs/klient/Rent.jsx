import { useContext } from "react";
import { Box, Button, Stack } from "@mui/material";
import ControlledDatePicker from "../../fields/ControlledDatePicker.jsx";
import { useFieldArray } from "react-hook-form";
import { FormContext } from "../../../../contexts/FormContext.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import RentAlbum from "./RentAlbum.jsx";

function Rent({ rentIndex, onDelete }) {
    const { control } = useContext(FormContext);
    const { fields, append, remove } = useFieldArray({
        control,
        name: `wypozyczenia[${rentIndex}].albumy`,
    });

    function addNewAlbum() {
        append({ numer: "" });
    }

    return (
        <Box
            sx={{
                pb: 2,
                width: "100%",
                borderBottom: "2px solid #373737",
            }}
        >
            <Stack spacing={1.5}>
                <Stack direction="row" alignItems="center">
                    <h2 style={{ flexGrow: 1, fontSize: "1.25rem", fontWeight: "700" }}>
                        Wypożyczenie
                    </h2>
                    <Button color="error" onClick={onDelete}>
                        Usuń wypożyczenie
                    </Button>
                </Stack>
                <Grid container columnSpacing={2}>
                    <Grid xs={6}>
                        <ControlledDatePicker
                            name={`wypozyczenia[${rentIndex}].dataRozpoczecia`}
                            label="Data rozpoczęcia"
                        />
                    </Grid>
                    <Grid xs={6}>
                        <ControlledDatePicker
                            name={`wypozyczenia[${rentIndex}].dataZakonczenia`}
                            label="Data zakończenia"
                        />
                    </Grid>
                </Grid>
                <Stack direction="row" alignItems="center">
                    <h2 style={{ flexGrow: 1, fontSize: "1.25rem", fontWeight: "500" }}>Albumy</h2>
                    <Button
                        variant="contained"
                        onClick={addNewAlbum}
                        disabled={fields.length === 2}
                    >
                        Dodaj album
                    </Button>
                </Stack>
                <Stack spacing={1.5}>
                    {fields.map((item, idx) => (
                        <RentAlbum
                            albumId={item.numer}
                            rentIndex={rentIndex}
                            albumIndex={idx}
                            onDelete={() => remove(idx)}
                            key={`${rentIndex}_ALBUM_${idx}`}
                        />
                    ))}
                </Stack>
            </Stack>
        </Box>
    );
}

export default Rent;
