import React from "react";
import "./style.css";
import { TextField } from "@mui/material";

const Input = ({ placeholder }) => {
  return (
    <>
      <TextField
        label={placeholder}
        variant="outlined"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "#fff",
            fontFamily: "Proxima Nova Light",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
              borderWidth: "2px",
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fff",
                borderWidth: "3px",
              },
            },
            "&:hover:not(.Mui-focused)": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ccc",
              },
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
    </>
  );
};

export default Input;
