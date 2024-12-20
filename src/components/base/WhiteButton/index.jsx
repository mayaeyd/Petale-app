import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import '../../../styles/fonts.css'

const WhiteButton = ({ label }) => {
  return (
    <Button
      variant="contained"
      endIcon={<ArrowForward />}
      sx={{
        backgroundColor:"white",
        color: 'black', 
        borderRadius: '10px', 
        width: '260px',
        height: '45px',
        fontFamily: 'Proxima Nova Regular',
        textTransform: 'capitalize',
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
