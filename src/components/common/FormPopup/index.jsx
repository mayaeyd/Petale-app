import {
  CircularProgress,
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
import {
  addNewPlant,
  addPlant,
  fetchPlants,
} from "../../../redux/slices/plantsSlice.js";
import GardenerNavbar from "../GardenerNavbar/index.jsx";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FormPopup = () => {
  const [open, setOpen] = useState(false);
  const [plantName, setPlantName] = useState("");
  const [plantedDate, setPlantedDate] = useState(null);
  const [plantType, setPlantType] = useState("flower");

  const { loading, error } = useSelector((state) => state.plants);
  const dispatch = useDispatch();

  if(loading) return <GardenerNavbar />;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = async () => {
    if (!plantedDate || !plantedDate.$y || !plantedDate.$M || !plantedDate.$D) {
      console.error("Invalid plantedDate", plantedDate);
      return;
    }

    const newPlant = {
      scientificName: plantName,
      plantedDate: `${plantedDate.$y}/${plantedDate.$M}/${plantedDate.$D}`,
      plantType,
    };

    // Add to local state
    dispatch(addPlant(newPlant));

    try {
      // Send to database
      await dispatch(addNewPlant(newPlant));

      // Refetch plants to ensure consistency
      dispatch(fetchPlants());
    } catch (error) {
      console.error("Failed to save plant:", error);
    }

    setPlantName("");
    setPlantedDate(null);
    setPlantType("");
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
          <PinkButtonRound
            onClick={handleAdd}
            label={
              loading ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Add"
              )
            }
          />
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default FormPopup;
