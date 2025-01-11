import { Button } from "@mui/material";
import React from "react";
import "../../../styles/fonts.css";

const PinkButtonRound = ({ label, onClick, endIcon, ...props }) => {
  return (
    <Button
      variant="contained"
      endIcon={endIcon ? endIcon : null}
      onClick={() => onClick()}
      {...props}
      sx={{
        lineHeight: 1.2,
        boxShadow: 0,
        backgroundColor: "#BE7D86",
        color: "#F7D6D6",
        borderRadius: "25px",
        marginTop: "10px",
        height: "35px",
        fontFamily: "Proxima Nova Semibold",
        fontSize: "1em",
        textTransform: "capitalize",
        "&:hover": {
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
