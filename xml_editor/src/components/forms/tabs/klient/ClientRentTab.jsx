import { useContext } from "react";
import { tabPropTypes } from "../propTypes.js";
import TabPanel from "../TabPanel.jsx";
import { Button, Stack } from "@mui/material";
import { FormContext } from "../../../../contexts/FormContext.jsx";
import { useFieldArray } from "react-hook-form";
import { emptyWypozyczenie } from "../../initialFormData.js";
import Rent from "./Rent.jsx";

function ClientRentTab({ currentIndex, tabIndex }) {
    const { control } = useContext(FormContext);
    const { fields, append, remove } = useFieldArray({
        control,
        name: "wypozyczenia",
    });

    return (
        <TabPanel currentIndex={currentIndex} tabIndex={tabIndex}>
            <Stack spacing={1.5}>
                <Button variant="outlined" fullWidth onClick={() => append(emptyWypozyczenie)}>
                    Nowe wypożyczenie
                </Button>
                {fields.map((item, idx) => (
                    <Rent rentIndex={idx} onDelete={() => remove(idx)} key={`RENT_${idx}`} />
                ))}
            </Stack>
        </TabPanel>
    );
}

ClientRentTab.propTypes = tabPropTypes;

export default ClientRentTab;
