import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { tabPropTypes } from "./propTypes.js";

export function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

function TabPanel({ children, currentIndex, tabIndex, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={currentIndex !== tabIndex}
            id={`vertical-tabpanel-${currentIndex}`}
            aria-labelledby={`vertical-tab-${currentIndex}`}
            {...other}
        >
            {tabIndex === currentIndex && <Box sx={{ py: 1 }}>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    ...tabPropTypes,
};

export default TabPanel;
