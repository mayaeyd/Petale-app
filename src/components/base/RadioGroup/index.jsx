import React, { useState } from "react";
import "./style.css";

const RadioGroup = ({ label, options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const handleChange = (value) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className="radio-group-container">
      <p className="radio-group-label">{label}</p>
      <div>
        {options.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              name="plant-type-radio"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => handleChange(option.value)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
