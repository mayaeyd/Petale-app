import { Slide } from "@mui/material";
import React, { forwardRef, useState } from "react";

const Transition = forwardRef(
  (Transition = (props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
  })
);

const FormPopup = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return <div></div>;
};

export default FormPopup;
