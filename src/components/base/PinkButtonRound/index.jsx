import { Button } from "@mui/material";
import React from "react";
import "../../../styles/fonts.css";

const PinkButtonRound = ({ label, onClick, endIcon }) => {
  return (
    <Button
      variant="contained"
      endIcon={endIcon ? endIcon : null}
      onClick={() => onClick()}
      sx={{
        backgroundColor: "#F7D6D6",
        color: "#BE7D86",
        border: "3px solid #BE7D86",
        borderRadius: "25px",
        marginTop: "10px",
        height: "35px",
        fontFamily: "Proxima Nova Semibold",
        fontSize: "1em",
        textTransform: "capitalize",
        "&:hover": {
          backgroundColor: "#BE7D86",
          border: "3px solid #F7D6D6",
          color: "#F7D6D6",
          "& .MuiSvgIcon-root": {
            color: "#F7D6D6", 
          },
        },
        
      }}
    >
      {label}
    </Button>
  );
};

export default PinkButtonRound;
