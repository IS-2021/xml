import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    MenuItem,
    Stack,
    Tab,
    Tabs,
    ThemeProvider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ALBUM_CASE_TYPES, albumSchema } from "../../xml/schemas/album.js";
import { appMaterialTheme } from "./theme.js";
import { createGatunekElement } from "../../xml/datatypes/Gatunek.js";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../contexts/StateContext.jsx";
import { FormContext } from "../../contexts/FormContext.jsx";
import {
    ALBUM_ADD,
    ALBUM_UPDATE,
    ALBUM_DELETE,
    ALBUM_AUTHOR_DELETE,
} from "../../reducers/AppReducer.js";
import { initialAlbum } from "./initialFormData.js";
import { DevTool } from "@hookform/devtools";
import PropTypes from "prop-types";
import "../Form.css";
import ControlledTextField from "./fields/ControlledTextField.jsx";
import ControlledDatePicker from "./fields/ControlledDatePicker.jsx";

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

function AlbumForm({ onSubmit, album, nextId }) {
    const getWykonawcyFromState = () =>
        state.xml.refs.albumy.filter((sAlbum) => sAlbum.id === album?.id)[0]?.wykonawcy ?? [];

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
        getValues,
    } = useForm({
        mode: "all",
        reValidateMode: "onChange",
        resolver: zodResolver(albumSchema),
        defaultValues: { ...initialAlbum, ...{ id: nextId }, ...(album || {}) },
    });
    const okladkaWatch = watch("okladka", initialAlbum.okladka);
    const { state, dispatch } = useContext(StateContext);
    const [selectedTab, setSelectedTab] = useState(0);
    const [wykonawcy, setWykonawcy] = useState([getValues("wykonawcy[0]")]);
    // This is for triggering re-render, as internal references aren't changing:
    const [updateCounter, setUpdateCounter] = useState(0);

    const handleTabChange = (event, newTab) => {
        setSelectedTab(newTab);
    };

    useEffect(() => {
        const wykonawcy = getWykonawcyFromState();

        if (wykonawcy.length === 0) return setWykonawcy(initialAlbum.wykonawcy);

        setWykonawcy(wykonawcy);
    }, [updateCounter]);

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

    function handleDeleteAuthor(albumId, authorIndex) {
        dispatch({
            type: ALBUM_AUTHOR_DELETE,
            payload: {
                albumId: albumId,
                authorIndex: authorIndex,
            },
        });
        setUpdateCounter((prev) => prev + 1);
    }

    return (
        <FormContext.Provider value={{ control, errors }}>
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
                                    <ControlledTextField
                                        name="id"
                                        textFieldProps={{ disabled: true }}
                                    />
                                    <ControlledTextField
                                        name="gatunek"
                                        textFieldProps={{ select: true }}
                                    >
                                        {state.xml.refs.gatunki.map((genre) => (
                                            <MenuItem key={`SELECT_${genre.id}`} value={genre.id}>
                                                {genre.nazwa}
                                            </MenuItem>
                                        ))}
                                    </ControlledTextField>
                                    <ControlledTextField name="nazwa" placeholder="Podaj nazwę" />
                                    <ControlledTextField
                                        name="okladka"
                                        placeholder="Podaj okładkę"
                                    />
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
                                                textFieldProps={{ select: true }}
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

                    {/* Authors */}
                    <TabPanel index={selectedTab} value={1}>
                        <Box sx={{ height: 408, width: "100%" }}>
                            <Grid spacing={1.5} container direction="column">
                                {wykonawcy &&
                                    wykonawcy.map((wykonawca, idx) => (
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
                                                <Grid
                                                    item
                                                    onClick={() =>
                                                        handleDeleteAuthor(album.id, idx)
                                                    }
                                                >
                                                    {wykonawcy.length > 1 && <DeleteIcon />}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    ))}
                            </Grid>
                        </Box>
                    </TabPanel>

                    {/* Płyty */}
                    <TabPanel index={selectedTab} value={2}></TabPanel>

                    {/* Produkcja */}
                    <TabPanel index={selectedTab} value={3}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Stack spacing={1.5}>
                                    <ControlledTextField
                                        name="producent"
                                        placeholder="Podaj producenta"
                                    />
                                    <ControlledTextField
                                        name="dystrybutor"
                                        placeholder="Podaj dystrybutora"
                                    />
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

                    <div className="form__buttons">
                        {!album && (
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                disabled={!isFormDataValid()}
                            >
                                {isFormDataValid()
                                    ? "Dodaj album"
                                    : "Wypełnij poprawnie wymagane pola"}
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
        </FormContext.Provider>
    );
}

export default AlbumForm;
