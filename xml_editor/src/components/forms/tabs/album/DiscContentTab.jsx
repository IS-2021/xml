import { Box, Button, Stack } from "@mui/material";
import CD from "./CD.jsx";
import { initialAlbum } from "../../initialFormData.js";
import TabPanel from "../TabPanel.jsx";
import { tabPropTypes } from "../propTypes.js";
import { useContext } from "react";
import { FormContext } from "../../../../contexts/FormContext.jsx";

function DiscContentTab({ currentIndex, tabIndex, plytyFieldArray }) {
    const { control } = useContext(FormContext);

    return (
        <TabPanel currentIndex={currentIndex} tabIndex={tabIndex}>
            <Stack spacing={2} sx={{ height: 396, width: "100%", overflowY: "scroll" }}>
                {plytyFieldArray.fields.map((field, idx) => (
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
                            deleteCD={() => plytyFieldArray.remove(idx)}
                            disableDelete={plytyFieldArray.fields.length === 1}
                        />
                    </Box>
                ))}
                <Button
                    variant="outlined"
                    onClick={() =>
                        plytyFieldArray.append({
                            ...initialAlbum.plyty[0],
                            cd: plytyFieldArray.fields.length + 1,
                        })
                    }
                >
                    Dodaj płytę
                </Button>
            </Stack>
        </TabPanel>
    );
}

DiscContentTab.propTypes = {
    ...tabPropTypes,
};

export default DiscContentTab;
