import React from "react";
import { InputAdornment, TextField } from "@mui/material";

const Input = ({ placeholder, type }) => {
  return (
    <TextField
      label={placeholder}
      variant="outlined"
      type={type}
      size="small"
      fullWidth
      margin="dense"
      slotProps={{
        htmlInput: {
          maxLength: type === "tel" ? 8 : undefined,
          inputMode: type === "tel" ? "numeric" : undefined,
        },
        input: {
          startAdornment: type === "tel" && (
            <InputAdornment
              position="start"
              sx={{
                color: "#fff",
                fontFamily: "Proxima Nova Light",
              }}
            >
              🇱🇧 +961
            </InputAdornment>
          ),
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: "#ffffff21",
          borderRadius: "15px",
          fontFamily: "Proxima Nova Light",
          "& input": {
            color: "#fff",
            opacity: 1,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
            borderWidth: "2px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
            borderWidth: "3px",
          },
        },
        "& .MuiInputLabel-outlined": {
          color: "#fff",
          fontFamily: "Proxima Nova Thin",
          "&.Mui-focused": {
            color: "#fff",
          },
        },
      }}
    />
  );
};

export default Input;
