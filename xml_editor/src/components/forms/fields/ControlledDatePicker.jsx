import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormContext } from "../../../contexts/FormContext.jsx";
import { capitalizeFirstLetter } from "./helpers.js";
import PropTypes from "prop-types";
import { useContext } from "react";

function ControlledDatePicker({ name, label, placeholder }) {
    const { errors, control } = useContext(FormContext);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        {...field}
                        label={label ?? capitalizeFirstLetter(name)}
                        placeholder={placeholder}
                        views={["year", "month", "day"]}
                        onChange={(newDate) => {
                            if (newDate) field.onChange(newDate.format("YYYY/MM/DD"));
                        }}
                        error={field.isDirty || !!errors[field.name]}
                        helperText={
                            field.isDirty || !!errors[field.name] ? errors[field.name].message : ""
                        }
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            )}
        />
    );
}

ControlledDatePicker.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
};

export default ControlledDatePicker;
