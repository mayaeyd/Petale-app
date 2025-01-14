import { Button } from "@mui/material";
import React from "react";
import "../../../styles/fonts.css";

const OutlinedButton = ({
  label,
  endIcon,
  borderColor,
  color,
  fontFamily,
  ...props
}) => {
  return (
    <Button
      variant="outlined"
      endIcon={endIcon ? endIcon : null}
      {...props}
      sx={{
        lineHeight: 1.2,
        boxShadow: 0,
        borderColor: borderColor || "#BE7D86",
        color: color || "#BE7D86",
        borderRadius: "25px",
        marginTop: "10px",
        height: "35px",
        fontFamily: fontFamily || "Proxima Nova Semibold",
        fontSize: "1em",
        textTransform: "capitalize",
        "&:hover": {
          backgroundColor: "transparent",
          borderColor: borderColor || "#BE7D86",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default OutlinedButton;
