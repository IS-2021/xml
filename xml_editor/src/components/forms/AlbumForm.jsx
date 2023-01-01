import { Box, Button, Stack, Tab, Tabs, ThemeProvider } from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { albumSchema } from "../../xml/schemas/album.js";
import { appMaterialTheme } from "./theme.js";
import { useContext, useState } from "react";
import { StateContext } from "../../contexts/StateContext.jsx";
import { FormContext } from "../../contexts/FormContext.jsx";
import { ALBUM_ADD, ALBUM_DELETE, ALBUM_UPDATE } from "../../reducers/AppReducer.js";
import { initialAlbum } from "./initialFormData.js";
import { DevTool } from "@hookform/devtools";
import "../Form.css";
import GeneralInfoTab from "./tabs/album/GeneralInfoTab.jsx";
import AuthorsTab from "./tabs/album/AuthorsTab.jsx";
import ProductionTab from "./tabs/album/ProductionTab.jsx";
import dayjs from "dayjs";
import TabPanel from "./tabs/TabPanel.jsx";
import CD from "./tabs/album/CD.jsx";

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

function AlbumForm({ onSubmit, album, nextId }) {
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
    const wykonawcy = useFieldArray({
        control,
        name: "wykonawcy",
    });
    const plyty = useFieldArray({
        control,
        name: "plyty",
    });

    const okladkaWatch = watch("okladka", initialAlbum.okladka);
    const { dispatch } = useContext(StateContext);
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newTab) => {
        setSelectedTab(newTab);
    };

    const deleteAlbum = (genreId) => {
        dispatch({ type: ALBUM_DELETE, payload: { id: genreId } });
        onSubmit();
    };

    const handleFormSubmit = (data) => {
        if (album) {
            data.dataPremiery = dayjs(data.dataPremiery).format("YYYY/MM/DD");
            dispatch({
                type: ALBUM_UPDATE,
                payload: {
                    id: album.id,
                    data: data,
                },
            });
        } else {
            dispatch({ type: ALBUM_ADD, payload: data });
        }
        onSubmit();
    };

    function isFormDataValid() {
        return Object.keys(errors).length === 0;
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

                    <GeneralInfoTab
                        currentIndex={selectedTab}
                        tabIndex={0}
                        coverWatch={okladkaWatch}
                    />
                    <AuthorsTab
                        currentIndex={selectedTab}
                        tabIndex={1}
                        wykonawcyFieldArray={wykonawcy}
                    />
                    <TabPanel currentIndex={selectedTab} tabIndex={2}>
                        <Stack spacing={2} sx={{ height: 396, width: "100%", overflowY: "scroll" }}>
                            {plyty.fields.map((field, idx) => (
                                <Box
                                    sx={{
                                        p: 2,
                                        width: "100%",
                                        border: "2px solid #444",
                                        borderRadius: "2px",
                                    }}
                                    key={`CD${idx}`}
                                >
                                    <CD
                                        cdIndex={idx}
                                        control={control}
                                        deleteCD={() => plyty.remove(idx)}
                                    />
                                </Box>
                            ))}
                            <Button
                                variant="outlined"
                                onClick={() =>
                                    plyty.append({
                                        ...initialAlbum.plyty[0],
                                        cd: plyty.fields.length + 1,
                                    })
                                }
                            >
                                Dodaj płytę
                            </Button>
                        </Stack>
                    </TabPanel>
                    <ProductionTab currentIndex={selectedTab} tabIndex={3} />

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
