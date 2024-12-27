import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import React, { forwardRef, Fragment, useState } from "react";
import PinkButtonRound from "../../base/PinkButtonRound";
import AddIcon from "@mui/icons-material/Add";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FormPopup = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <PinkButtonRound
        label="Add Plant"
        endIcon={<AddIcon />}
        onClick={handleClickOpen}
      />
    </Fragment>
  );
};

export default FormPopup;
