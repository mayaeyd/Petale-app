import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "../../../styles/fonts.css";

const WhiteButton = ({ label, onClick }) => {
  return (
    <Button
      variant="contained"
      endIcon={<ArrowForward />}
      fullWidth
      onClick={() => onClick()}
      sx={{
        backgroundColor: "white",
        color: "black",
        borderRadius: "10px",
        marginTop: "10px",
        height: "35px",
        fontFamily: "Proxima Nova Regular",
        textTransform: "capitalize",
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default WhiteButton;
