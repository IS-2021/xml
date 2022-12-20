import {Button, createTheme, Stack, TextField, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        action: {
            active: "#ff8a00",
        },
    },
});

function AddClientForm() {
    return (
        <ThemeProvider theme={darkTheme}>
            <form>
                <Stack spacing={1.5}>
                <TextField label="Imię" placeholder="Podaj imię" />
                <TextField label="Nazwisko" placeholder="Podaj nazwisko" />
                <TextField label="Pesel" placeholder="Podaj pesel" />
                <TextField label="Login" placeholder="Podaj login" />

                <Button type="submit" variant="contained">Dodaj klienta</Button>
                </Stack>
            </form>
        </ThemeProvider>
    );
}

export default AddClientForm;
