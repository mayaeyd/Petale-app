import { Button } from "@mui/material";
import React from "react";
import "../../../styles/fonts.css";

const PinkButtonSquared = ({ label, onClick }) => {
  return (
    <Button
      variant="contained"
      onClick={() => onClick()}
      fullWidth
      sx={{
        backgroundColor: "#F7D6D6",
        color: "#BE7D86",
        border: "2px solid #BE7D86",
        marginTop: "10px",
        height: "35px",
        borderRadius : "0px",
        fontFamily: "Proxima Nova Semibold",
        fontSize: "1em",
        textTransform: "capitalize",
        "&:hover": {
          backgroundColor: "#BE7D86",
          border: "1px solid #F7D6D6",
          color: "#F7D6D6",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default PinkButtonSquared;
