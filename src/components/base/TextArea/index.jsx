import React from "react";
import { styled } from "@mui/system";

const StyledTextarea = styled("textarea")`
  box-sizing: border-box;
  width: 100%;
  font-family: "Proxima Nova Light";
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: #383838;
  background: #ffffff21;
  border: 2px solid #be7d86;
  resize: vertical;
  min-height: ${(props) => props.minRows * 24}px;
  

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
