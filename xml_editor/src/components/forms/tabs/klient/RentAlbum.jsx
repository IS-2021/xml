import { useContext } from "react";
import { MenuItem } from "@mui/material";
import { StateContext } from "../../../../contexts/StateContext.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import DeleteIcon from "@mui/icons-material/DeleteOutlined.js";
import ControlledTextField from "../../fields/ControlledTextField.jsx";

function RentAlbum({ rentIndex, albumIndex, albumId, onDelete }) {
    const { state } = useContext(StateContext);

    let album = {
        nazwa: "",
        okladka: "",
        wykonawcy: [{ nazwa: "" }],
    };

    const stateAlbum = state.xml.refs.albumy.filter((album) => album.id === albumId)[0];
    stateAlbum && (album = stateAlbum);

    return (
        <Grid container columnGap={2}>
            <Grid xs="auto">
                <img
                    src={`./assets/covers/${album.okladka}`}
                    alt="Okladka"
                    style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "4px",
                        color: "232323",
                        backgroundColor: "#444",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                />
            </Grid>
            <Grid xs display="flex" alignItems="center">
                <ControlledTextField
                    name={`wypozyczenia[${rentIndex}].albumy[${albumIndex}].numer`}
                    label="ID albumu"
                    textFieldProps={{
                        variant: "standard",
                        select: true,
                        fullWidth: true,
                    }}
                >
                    {state.xml.refs.albumy.map((album, idx) => (
                        <MenuItem value={album.id} key={`RENT_AL_SEL${idx}`}>
                            {album.nazwa}
                        </MenuItem>
                    ))}
                </ControlledTextField>
            </Grid>
            <Grid xs="auto" display="flex" justifyContent="center" alignItems="center">
                <DeleteIcon onClick={onDelete} />
            </Grid>
        </Grid>
    );
}

export default RentAlbum;
