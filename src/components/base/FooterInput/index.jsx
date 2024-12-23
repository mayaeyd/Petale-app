import React from "react";
import { TextField } from "@mui/material";

const FooterInput = ({ onChange }) => {
  return (
    <TextField
      placeholder="Sign up for our newsletter!"
      variant="outlined"
      type="email"
      onChange={onChange}
      fullWidth
      size="medium"
      InputProps={{
        style: {
          backgroundColor: "white",
          fontFamily: "Proxima Nova Thin",
        },
      }}
      InputLabelProps={{
        style: {
          fontFamily: "Proxima Nova Thin",
        },
      }}
      sx={{
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "& .MuiInputBase-root": {
          borderRadius: 0,
        },
      }}
    />
  );
};

export default FooterInput;
