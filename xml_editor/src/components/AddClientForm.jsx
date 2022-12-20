import {Button, createTheme, Stack, TextField, ThemeProvider} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        action: {
            active: "#ff8a00",
        },
    },
});

function AddClientForm() {
    const { control, handleSubmit, formState: { errors }} = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });
    const onSubmit = data => console.log(data);

    return (
        <ThemeProvider theme={darkTheme}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={1.5}>
                <Controller
                    name="imie"
                    control={control}
                    defaultValue=""
                    rules={{ required: true, minLength: 3 }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Imię"
                            placeholder="Podaj imię"
                            error={!!errors[name]}
                            helperText={
                                errors[name] ? errors[name].message : ""
                            }
                        />
                    )}
                />
                <Controller
                    name="nazwisko"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Nazwisko"
                            placeholder="Podaj nazwisko"
                        />
                    )}
                />
                <Controller
                    name="pesel"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Pesel"
                            placeholder="Podaj pesel"
                        />
                    )}
                />
                <Controller
                    name="login"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Login"
                            placeholder="Podaj login"
                        />
                    )}
                />

                <Button type="submit" variant="contained">Dodaj klienta</Button>
                </Stack>
            </form>

            <DevTool control={control} />
        </ThemeProvider>
    );
}

export default AddClientForm;
