import React from "react";
import { InputAdornment, TextField } from "@mui/material";

const Input = ({
  label,
  placeholder,
  type,
  onChange,
  inputColor,
  value = "",
  height,
  width,
  ...props
}) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      variant="outlined"
      type={type}
      value={value}
      onChange={onChange}
      size="small"
      fullWidth
      {...props}
      slotProps={{
        htmlInput: {
          maxLength: type === "tel" ? 8 : undefined,
          inputMode: type === "tel" ? "numeric" : undefined,
          min: type === "number" ? 1 : undefined,
        },
        input: {
          startAdornment: type === "tel" && (
            <InputAdornment position="start">🇱🇧 +961</InputAdornment>
          ),
        },
      }}
      sx={{
        marginBottom: "7px",
        "& .MuiOutlinedInput-root": {
          backgroundColor: "#ffffff21",
          borderRadius: "15px",
          height: { height },
          fontFamily: "Proxima Nova Light",
          "& input": {
            color: inputColor ? inputColor : "#fff",
            opacity: 1,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: inputColor ? inputColor : "#fff",
            borderWidth: "2px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: inputColor ? inputColor : "#fff",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: inputColor ? inputColor : "#fff",
            borderWidth: "3px",
          },
        },
        "& .MuiInputLabel-outlined": {
          color: inputColor ? inputColor : "#fff",
          fontFamily: "Proxima Nova Thin",
          "&.Mui-focused": {
            color: inputColor ? inputColor : "#fff",
          },
        },
        "& .css-1ro85z9-MuiTypography-root": {
          color: inputColor ? inputColor : "#fff",
          fontFamily: "Proxima Nova Light",
        },
      }}
    />
  );
};

export default Input;
