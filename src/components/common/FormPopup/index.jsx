import { Slide } from "@mui/material";
import React, { forwardRef, useState } from "react";

const Transition = forwardRef(
  (Transition = (props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
  })
);

const FormPopup = () => {
  return <div></div>;
};

export default FormPopup;
