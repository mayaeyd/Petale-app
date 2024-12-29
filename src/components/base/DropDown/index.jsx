import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DropDown = ({ options, label, inputColor }) => {
  const [value, setValue] = useState(options[0]?.value || "");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <FormControl
        required
        fullWidth
        size="small"
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#ffffff21",
            borderRadius: "15px",
            fontFamily: "Proxima Nova Light",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: inputColor ? inputColor : "#fff",
              borderWidth: "2px",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: inputColor ? inputColor : "#fff",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: inputColor ? inputColor : "#fff",
              borderWidth: "2px",
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
      >
        <InputLabel
          id="demo-simple-select-label"
          sx={{ color: inputColor ? inputColor : "#fff" }}
        >
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
          sx={{ color: inputColor ? inputColor : "#fff" }}
        >
          {options.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{ color: inputColor ? inputColor : "#fff" }}
            >
              {option.label || option.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default DropDown;
