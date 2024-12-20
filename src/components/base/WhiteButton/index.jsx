import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const WhiteButton = ({ label }) => {
  return (
    <Button
      variant="contained"
      endIcon={<ArrowForward />}
      sx={{
        backgroundColor:"white",
        color: 'black', 
        borderRadius: '10px', 
        width: '250px',
        '&:hover': {
          backgroundColor: '#f0f0f0',
        },
      }}
    >
      {label}
    </Button>
  );
};

export default WhiteButton;
