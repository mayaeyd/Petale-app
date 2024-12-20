import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const WhiteButton = ({ label }) => {
  return (
    <Button
      variant="contained"
      endIcon={<ArrowForward />}
    >
      {label}
    </Button>
  );
};

export default WhiteButton;
