import { useContext, useEffect, useState } from "react";
import { tabPropTypes } from "../propTypes.js";
import TabPanel from "../TabPanel.jsx";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Stack,
    Tooltip,
} from "@mui/material";
import { FormContext } from "../../../../contexts/FormContext.jsx";
import { useFieldArray } from "react-hook-form";
import { emptyWypozyczenie } from "../../initialFormData.js";
import Rent from "./Rent.jsx";
import { StateContext } from "../../../../contexts/StateContext.jsx";

function ClientRentTab({ currentIndex, tabIndex }) {
    const { state } = useContext(StateContext);
    const { control } = useContext(FormContext);
    const { fields, append, remove } = useFieldArray({
        control,
        name: "wypozyczenia",
    });
    const [expanded, setExpanded] = useState(false);

    const newRentDisabled = state.xml.refs.albumy.length === 0;

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const createNewRent = () => {
        append(emptyWypozyczenie);
    };

    const removeRent = (idx) => {
        remove(idx);
        setExpanded(false);
    };

    useEffect(() => {}, [fields.length]);

    return (
        <TabPanel currentIndex={currentIndex} tabIndex={tabIndex}>
            <Stack spacing={1.5}>
                <Tooltip title={newRentDisabled && "Brak albumów do wypożyczenia"}>
                    <span>
                        <Button
                            variant="outlined"
                            fullWidth
                            disabled={newRentDisabled}
                            onClick={createNewRent}
                        >
                            Nowe wypożyczenie
                        </Button>
                    </span>
                </Tooltip>
                <div style={{ height: "510px", overflowY: "scroll" }}>
                    {fields.map((item, idx) => (
                        <Accordion
                            expanded={expanded === `panel${idx}`}
                            onChange={handleChange(`panel${idx}`)}
                            key={`RENT_${idx}`}
                        >
                            <AccordionSummary>Wypożyczenie ({item.albumy.length})</AccordionSummary>
                            <AccordionDetails>
                                <Rent rentIndex={idx} onDelete={() => removeRent(idx)} />
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </Stack>
        </TabPanel>
    );
}

ClientRentTab.propTypes = tabPropTypes;

export default ClientRentTab;
