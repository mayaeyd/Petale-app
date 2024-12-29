import React from "react";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";

const StyledTextarea = styled(TextareaAutosize)`
  box-sizing: border-box;
  width: 100%;
  font-family: "Proxima Nova Light";
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: #fff;
  background: #ffffff21;
  border: 2px solid #be7d86;

  &:hover {
    border-color: #be7d86;
  }

  &:focus {
    border: 3px solid #be7d86;
    outline: 0;
  }
`;

const TextArea = ({ minRows, minLength, placeholder, ...props }) => {
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
