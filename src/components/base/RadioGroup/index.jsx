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
      <p className="radio-group-title">{label}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        {options.map((option) => (
          <label key={option.value}>
            <input
              className="radio-group-label"
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
