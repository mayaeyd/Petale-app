import React from "react";

const RadioGroup = ({ value1, value2 }) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group"
      >
        <FormControlLabel value="" control={<Radio />} label="" />
        <FormControlLabel value="" control={<Radio />} label="" />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
