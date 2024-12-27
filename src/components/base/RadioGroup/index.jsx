import React from "react";

const RadioGroup = ({ value1, value2 }) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={value1}
        name="radio-buttons-group"
      >
        <FormControlLabel value={value1} control={<Radio />} label={value1} />
        <FormControlLabel value={value2} control={<Radio />} label={value2} />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
