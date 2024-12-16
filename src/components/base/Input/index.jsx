import React from "react";
import './style.css';

const Input = ({ placeholder }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};

export default Input;
