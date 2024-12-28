import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlantById } from "../../redux/slices/plantsSlice";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import "./style.css";
import { CircularProgress, Snackbar } from "@mui/material";

const GrowingPlantDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedPlant, loading, error } = useSelector(
    (state) => state.plants
  );

  useEffect(() => {
    dispatch(fetchPlantById(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <>
        <GardenerNavbar />
        <div className="spinner-container">
          <CircularProgress color="success" />
        </div>
      </>
    );
  }

  if (error)
    return (
      <Snackbar
        open={true} 
        autoHideDuration={6000}
        message={`Error: ${error || "Something went wrong"}`}
      />
    );

  if (!selectedPlant) {
    return <div>No plant data available</div>;
  }

  const { scientificName, plantedDate, plantType } = selectedPlant.plant;

  return (
    <>
      <GardenerNavbar />
      <div className="plant-details-container">
        <div className="plant-name-type">
          <div>
            <h1>{scientificName}</h1>
            <p>{plantedDate}</p>
          </div>
          <h3>{plantType}</h3>
        </div>
      </div>
    </>
  );
};

export default GrowingPlantDetails;
