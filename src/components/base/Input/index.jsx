import React from "react";
import "./style.css";
import { InputAdornment, TextField } from "@mui/material";

const Input = ({ placeholder, type }) => {
  return (
    <>
      <TextField
        label={placeholder}
        variant="outlined"
        type={type}
        fullWidth
        inputProps={{
          maxLength: type === "tel" ? 8 : undefined, 
          pattern: type === "tel" ? "[0-9]*" : undefined, 
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#ffffff21",
            borderRadius: "15px",
            color: "#fff",
            fontFamily: "Proxima Nova Light",
            "& input": {
              color: "#fff",
              opacity: 1,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
              borderWidth: "2px",
            },
            "&:hover": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fff",
              },
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fff",
                borderWidth: "3px",
              },
            },
          },
          "& .MuiInputLabel-outlined": {
            color: "#fff",
            fontFamily: "Proxima Nova Thin",
            opacity: 1,
            "&.Mui-focused": {
              color: "#fff",
            },
          },
        }}
        InputProps={{
          startAdornment: type === "tel" && (
            <InputAdornment position="start">
              🇱🇧 +961
            </InputAdornment>
          )
        }}
      />
    </>
  );
};

export default Input;
