import React from "react";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";

const TextArea = ({ minRows, minLength, placeholder = "", ...props }) => {
  return (
    <StyledTextarea
      minRows={minRows}
      placeholder={placeholder}
      minLength={minLength}
      {...props}
    />
  );
};

export default TextArea;
