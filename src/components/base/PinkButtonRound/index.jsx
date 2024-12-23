import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "../../../styles/fonts.css";

const PinkButtonRound = ({ label, onClick }) => {
  return (
    <Button
      variant="contained"
      endIcon={<ArrowForward sx={{ color: "#BE7D86" }} />}
      onClick={() => onClick()}
      sx={{
        backgroundColor: "#F7D6D6",
        color: "#BE7D86",
        border: "2px solid #BE7D86",
        borderRadius: "25px",
        marginTop: "10px",
        height: "35px",
        fontFamily: "Proxima Nova Regular",
        textTransform: "capitalize",
      }}
    >
      {label}
    </Button>
  );
};

export default PinkButtonRound;
