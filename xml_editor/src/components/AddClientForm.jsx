import { z } from "zod";
import {Button, createTheme, Stack, TextField, ThemeProvider} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        action: {
            active: "#ff8a00",
        },
    },
});

const newClientSchema = z.object({
    imie: z.string().min(3, "Imię musi mieć min. 3 znaki"),
    nazwisko: z.string().min(3, "Nazwisko musi mieć min. 3 znaki"),
    pesel: z.string().length(11, "Pesel musi mieć dokładnie 11 znaków"),
    login: z.string().max(20, "Login powinien mieć max. 20 znaków").optional()
})

function AddClientForm() {
    const { control, handleSubmit, formState: { errors }} = useForm({
        mode: "all",
        reValidateMode: "onChange",
        resolver: zodResolver(newClientSchema),
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
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Imię"
                            placeholder="Podaj imię"
                            error={field.isDirty || !!errors[field.name]}
                            helperText={
                                field.isDirty || !!errors[field.name] ? errors[field.name].message : ""
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
                            error={field.isDirty || !!errors[field.name]}
                            helperText={
                                field.isDirty || !!errors[field.name] ? errors[field.name].message : ""
                            }
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
                            error={field.isDirty || !!errors[field.name]}
                            helperText={
                                field.isDirty || !!errors[field.name] ? errors[field.name].message : ""
                            }
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
                            error={field.isDirty || !!errors[field.name]}
                            helperText={
                                field.isDirty || !!errors[field.name] ? errors[field.name].message : ""
                            }
                        />
                    )}
                />

                <Button
                    type="submit"
                    variant="contained"
                    disabled={Object.keys(errors).length !== 0}
                >Dodaj klienta</Button>
                </Stack>
            </form>
        </ThemeProvider>
    );
}

export default AddClientForm;
