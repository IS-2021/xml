import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { useContext } from "react";
import { FormContext } from "../contexts/FormContext.jsx";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function hasErrors(field, errors) {
    return field.isDirty || !!errors[field.name];
}

function getFieldError(field, errors) {
    return errors[field.name].message;
}

function ControlledTextField({
    children,
    name,
    placeholder,
    label,
    textFieldProps,
    error,
    errorParams = {},
    helper,
    helperTextParams = {},
}) {
    const { errors, control } = useContext(FormContext);

    function _hasErrors(field) {
        return error ? error(field, errors, errorParams) : hasErrors(field, errors);
    }

    function _getFieldError(field) {
        return helper ? helper(field, errors, helperTextParams) : getFieldError(field, errors);
    }

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextField
                    {...field}
                    {...textFieldProps}
                    label={label ?? capitalizeFirstLetter(name)}
                    placeholder={placeholder ?? ""}
                    error={_hasErrors(field)}
                    helperText={_hasErrors(field) ? _getFieldError(field) : ""}
                >
                    {children}
                </TextField>
            )}
        />
    );
}

ControlledTextField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    // textFieldProps: PropTypes.shape({
    //     type: PropTypes.string,
    //     select: PropTypes.bool,
    //     fullWidth: PropTypes.bool,
    // }),
    error: PropTypes.func,
    helper: PropTypes.func,
};

ControlledTextField.defaultProps = {
    textFieldProps: {
        type: "string",
        select: false,
        fullWidth: false,
    },
};

export default ControlledTextField;
