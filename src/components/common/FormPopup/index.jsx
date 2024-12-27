import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { forwardRef, Fragment, useState } from "react";
import PinkButtonRound from "../../base/PinkButtonRound";
import AddIcon from "@mui/icons-material/Add";
import "../../../styles/fonts.css";
import Input from "../../base/Input";
import FooterInput from "../../base/FooterInput";

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
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Fragment>
      <PinkButtonRound
        label="Add Plant"
        endIcon={<AddIcon />}
        onClick={handleClickOpen}
      />

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullScreen={fullScreen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        sx={{
          "& .MuiPaper-root": {
            border: "2px solid white",
            borderRadius: "12px",
            backgroundColor: "#4b5842",
            padding: "10px",
            width: "500px",
          },
        }}
      >
        <DialogTitle
          sx={{
            color: "white",
            fontFamily: "Cormorant Semibold",
            fontWeight: "500",
            fontSize: "2em",
            textAlign: "center",
          }}
          id="responsive-dialog-title"
        >
          Add Plant
        </DialogTitle>
        <DialogContent
          sx={{
            "& .MuiDialogContentText-root": {
              fontSize: "16px",
              color: "gray",
              width: "100%",
            },
          }}
        >
          <DialogContentText
            id="alert-dialog-slide-description"
            maxWidth="100%"
          >
            <Input type="text" placeholder="Plant Name" />
            
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 16px",
          }}
        >
          <PinkButtonRound onClick={handleClose} label="Close" />
          <PinkButtonRound onClick={handleClose} label="Add" />
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default FormPopup;
