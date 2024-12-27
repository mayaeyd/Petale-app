import {
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
import "../../../styles/fonts.css";
import Input from "../../base/Input";
import DateField from "../../base/DateField";
import RadioGroup from "../../base/RadioGroup";
import { useDispatch, useSelector } from "react-redux";
import { addNewPlant, addPlant } from "../../../redux/slices/plantsSlice.js";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FormPopup = () => {
  const [open, setOpen] = useState(false);
  const [plantName, setPlantName] = useState("");
  const [plantedDate, setPlantedDate] = useState("");
  const [plantType, setPlantType] = useState("flower");

  const state = useSelector((state) => state.plants);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    const newPlant = {
      scientificName: plantName,
      plantedDate: new Date(plantedDate.$y, plantedDate.$M, plantedDate.$D),
      plantType,
    };
    dispatch(addNewPlant(newPlant));
  };

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
            <Input
              type="text"
              placeholder="Plant Name"
              onChange={(e) => setPlantName(e.target.value)}
            />
            <DateField
              label="Date Planted"
              onChange={(selectedDate) => setPlantedDate(selectedDate)}
            />
            <RadioGroup
              label="Plant Type"
              options={[
                { value: "flower", label: "Flower" },
                { value: "plant", label: "Plant" },
              ]}
              onChange={(value) => setPlantType(value)}
            />
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
          <PinkButtonRound onClick={handleAdd} label="Add" />
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default FormPopup;
