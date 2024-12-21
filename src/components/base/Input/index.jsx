import React from "react";
import "./style.css";
import { TextField } from "@mui/material";

const Input = ({ placeholder, type }) => {
  return (
    <>
      <TextField
        label={placeholder}
        variant="outlined"
        type={type}
        fullWidth
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
      />
    </>
  );
};

export default Input;
