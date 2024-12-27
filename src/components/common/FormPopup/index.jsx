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
            border: "2px solid #BE7D86", // Dialog container border
            borderRadius: "12px", // Rounded corners
            backgroundColor: "white",
            padding: "16px", // Padding inside the dialog
          },
        }}
      >
        <DialogTitle
          sx={{
            color: "#BE7D86",
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
              fontSize: "16px", // Content text size
              color: "gray", // Content text color
            },
          }}
        >
          <DialogContentText id="alert-dialog-slide-description">
            Customize the content here to guide users.
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "space-between", // Space between buttons
            padding: "8px 16px", // Adjust padding
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
