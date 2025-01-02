import React, { useEffect } from "react";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlants } from "../../redux/slices/plantsSlice";
import { CircularProgress } from "@mui/material";
import "./style.css";
import GrowingPlantCard from "../../components/common/GrowingPlantCard";
import FormPopup from "../../components/common/FormPopup";

const GrowingPlantsPage = () => {
  const { plants, loading, error } = useSelector((state) => state.plants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlants());
  }, [dispatch]);

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

  if (error) {
    console.error(error);
  }

  return (
    <div>
      <GardenerNavbar />
      <div className="button-container">
        <FormPopup />
      </div>
      <div className="growing-plants-container">
        <h1>Growing Plants</h1>
        <h2>Plants</h2>
        <div className="growing-plt-cards-container">
          {plants.map((plant) =>
            plant.plantType === "plant" ? (
              <GrowingPlantCard
                key={plant._id}
                name={plant.scientificName}
                date={plant.plantedDate}
                id={plant._id}
              />
            ) : null
          )}
        </div>
        <h2>Flowers</h2>
        <div className="growing-plt-cards-container">
          {plants.map((plant) =>
            plant.plantType === "flower" ? (
              <GrowingPlantCard
                key={plant._id}
                name={plant.scientificName}
                date={plant.plantedDate}
                id={plant._id}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default GrowingPlantsPage;
