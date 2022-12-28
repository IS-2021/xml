import {
    Box,
    Button,
    Grid,
    MenuItem,
    Stack,
    Tab,
    Tabs,
    TextField,
    ThemeProvider,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ALBUM_CASE_TYPES, albumSchema } from "../xml/schemas/album.js";
import { appMaterialTheme } from "./theme.js";
import { createGatunekElement } from "../xml/datatypes/Gatunek.js";
import { useContext, useState } from "react";
import { StateContext } from "../contexts/StateContext.jsx";
import { ALBUM_ADD, ALBUM_UPDATE, ALBUM_DELETE } from "../reducers/AppReducer.js";
import { initialAlbum } from "./initialFormData.js";
import { DevTool } from "@hookform/devtools";
import PropTypes from "prop-types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./Form.css";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ py: 1 }}>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

function AlbumForm({ onSubmit, album, nextId }) {
    const { state, dispatch } = useContext(StateContext);
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newTab) => {
        setSelectedTab(newTab);
    };

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        mode: "all",
        reValidateMode: "onChange",
        resolver: zodResolver(albumSchema),
        defaultValues: { ...initialAlbum, ...{ id: nextId }, ...(album || {}) },
    });
    const okladkaWatch = watch("okladka", initialAlbum.okladka);

    const addAlbum = (album) => {
        dispatch({ type: ALBUM_ADD, payload: album });
    };

    const updateAlbum = (genreId, album) => {
        album.dataPremiery = album.dataPremiery.format("YYYY/MM/DD");
        dispatch({
            type: ALBUM_UPDATE,
            payload: {
                id: genreId,
                data: album,
            },
        });
        onSubmit();
    };

    const deleteAlbum = (genreId) => {
        dispatch({ type: ALBUM_DELETE, payload: { id: genreId } });
        onSubmit();
    };

    const handleFormSubmit = (data) => {
        if (album) {
            updateAlbum(album.id, data);
        } else {
            addAlbum(createGatunekElement(data.id, data.nazwa));
        }
        onSubmit();
    };

    function isFormDataValid() {
        return Object.keys(errors).length === 0;
    }

    return (
        <ThemeProvider theme={appMaterialTheme}>
            <form onSubmit={handleSubmit(handleFormSubmit)} className="form__album">
                <Tabs
                    orientation="horizontal"
                    value={selectedTab}
                    onChange={handleTabChange}
                    sx={{ marginBottom: "1rem" }}
                >
                    <Tab label="Informacje" {...a11yProps(0)} />
                    <Tab label="Autorzy" {...a11yProps(1)} />
                    <Tab label="Płyty" {...a11yProps(2)} />
                    <Tab label="Produkcja" {...a11yProps(3)} />
                </Tabs>

                {/* General info */}
                <TabPanel value={selectedTab} index={0}>
                    <Grid container spacing={2}>
                        <Grid
                            item
                            xs={6}
                            // sx={{ border: 1, borderColor: "divider", borderRadius: 1 }}
                        >
                            <img
                                className="form__album__image"
                                src={`./assets/covers/${okladkaWatch}`}
                                alt="Podgląd okładki albumu"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Stack spacing={1.5}>
                                <Controller
                                    name="id"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField {...field} label="ID" disabled={true} />
                                    )}
                                />
                                <Controller
                                    name="gatunek"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Gatunek"
                                            placeholder="Wybierz nazwę"
                                            select
                                            error={field.isDirty || !!errors[field.name]}
                                            helperText={
                                                field.isDirty || !!errors[field.name]
                                                    ? errors[field.name].message
                                                    : ""
                                            }
                                        >
                                            {state.xml.refs.gatunki.map((genre) => (
                                                <MenuItem
                                                    key={`SELECT_${genre.id}`}
                                                    value={genre.id}
                                                >
                                                    {genre.nazwa}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    )}
                                />
                                <Controller
                                    name="nazwa"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Nazwa"
                                            placeholder="Podaj nazwę"
                                            error={field.isDirty || !!errors[field.name]}
                                            helperText={
                                                field.isDirty || !!errors[field.name]
                                                    ? errors[field.name].message
                                                    : ""
                                            }
                                        />
                                    )}
                                />
                                <Controller
                                    name="okladka"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Okladka (URL)"
                                            placeholder="Podaj URL"
                                            error={field.isDirty || !!errors[field.name]}
                                            helperText={
                                                field.isDirty || !!errors[field.name]
                                                    ? errors[field.name].message
                                                    : ""
                                            }
                                        />
                                    )}
                                />
                                <Grid container>
                                    <Grid item xs={9}>
                                        <Controller
                                            name="cena.wartosc"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    label="Cena"
                                                    placeholder="Podaj cenę"
                                                    type="number"
                                                    mr={2}
                                                    error={field.isDirty || !!errors[field.name]}
                                                    helperText={
                                                        field.isDirty || !!errors[field.name]
                                                            ? errors[field.name].message
                                                            : ""
                                                    }
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Controller
                                            name="cena.waluta"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    label="Waluta"
                                                    placeholder="Podaj walutę"
                                                    select
                                                    fullWidth
                                                    error={field.isDirty || !!errors[field.name]}
                                                    helperText={
                                                        field.isDirty || !!errors[field.name]
                                                            ? errors[field.name].message
                                                            : ""
                                                    }
                                                >
                                                    <MenuItem value="PLN">ZŁ</MenuItem>
                                                    <MenuItem value="USD">$</MenuItem>
                                                    <MenuItem value="EUR">€</MenuItem>
                                                </TextField>
                                            )}
                                        />
                                    </Grid>
                                </Grid>

                                <Controller
                                    name="ocena"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Ocena"
                                            placeholder="Podaj ocenę"
                                            type="number"
                                            error={field.isDirty || !!errors[field.name]}
                                            helperText={
                                                field.isDirty || !!errors[field.name]
                                                    ? errors[field.name].message
                                                    : ""
                                            }
                                        />
                                    )}
                                />
                            </Stack>
                        </Grid>
                    </Grid>
                </TabPanel>

                {/* Authors */}
                <TabPanel index={selectedTab} value={1}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Stack spacing={1.5}></Stack>
                        </Grid>
                    </Grid>
                </TabPanel>

                {/* Płyty */}
                <TabPanel index={selectedTab} value={2}></TabPanel>

                {/* Produkcja */}
                <TabPanel index={selectedTab} value={3}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Stack spacing={1.5}>
                                <Controller
                                    name="producent"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Producent"
                                            placeholder="Podaj producenta"
                                            error={field.isDirty || !!errors[field.name]}
                                            helperText={
                                                field.isDirty || !!errors[field.name]
                                                    ? errors[field.name].message
                                                    : ""
                                            }
                                        />
                                    )}
                                />
                                <Controller
                                    name="dystrybutor"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Dystrybutor"
                                            placeholder="Podaj dystrybutora"
                                            error={field.isDirty || !!errors[field.name]}
                                            helperText={
                                                field.isDirty || !!errors[field.name]
                                                    ? errors[field.name].message
                                                    : ""
                                            }
                                        />
                                    )}
                                />
                                <Controller
                                    name="opakowanie"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Opakowanie"
                                            placeholder="Podaj dystrybutora"
                                            select
                                            error={field.isDirty || !!errors[field.name]}
                                            helperText={
                                                field.isDirty || !!errors[field.name]
                                                    ? errors[field.name].message
                                                    : ""
                                            }
                                        >
                                            {ALBUM_CASE_TYPES.map((caseType) => (
                                                <MenuItem key={caseType} value={caseType}>
                                                    {caseType}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    )}
                                />
                                <Controller
                                    name="dataPremiery"
                                    control={control}
                                    render={({ field }) => (
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                {...field}
                                                label="Data premiery"
                                                placeholder="Podaj datę premiery"
                                                views={["year", "month", "day"]}
                                                onChange={(newDate) => {
                                                    field.onChange(newDate.format("YYYY/MM/DD"));
                                                }}
                                                error={field.isDirty || !!errors[field.name]}
                                                helperText={
                                                    field.isDirty || !!errors[field.name]
                                                        ? errors[field.name].message
                                                        : ""
                                                }
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                    )}
                                />
                                <Controller
                                    name="naklad"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Nakład"
                                            placeholder="Podaj nakład"
                                            type="number"
                                            error={field.isDirty || !!errors[field.name]}
                                            helperText={
                                                field.isDirty || !!errors[field.name]
                                                    ? errors[field.name].message
                                                    : ""
                                            }
                                        />
                                    )}
                                />
                                <Controller
                                    name="sprzedaneEgzemplarze"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Sprzedano"
                                            placeholder="Podaj ile albumów sprzedano"
                                            type="number"
                                            error={field.isDirty || !!errors[field.name]}
                                            helperText={
                                                field.isDirty || !!errors[field.name]
                                                    ? errors[field.name].message
                                                    : ""
                                            }
                                        />
                                    )}
                                />
                            </Stack>
                        </Grid>
                    </Grid>
                </TabPanel>

                <div className="form__buttons">
                    {!album && (
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            disabled={!isFormDataValid()}
                        >
                            Dodaj album
                        </Button>
                    )}
                    {album && (
                        <>
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                disabled={!isFormDataValid()}
                            >
                                Zapisz zmiany
                            </Button>
                            <Button
                                fullWidth
                                variant="outlined"
                                color="error"
                                onClick={() => deleteAlbum(album.id)}
                            >
                                Usuń album
                            </Button>
                        </>
                    )}
                </div>
                <DevTool control={control} />
            </form>
        </ThemeProvider>
    );
}

export default AlbumForm;
