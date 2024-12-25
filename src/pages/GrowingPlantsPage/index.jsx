import React, { useEffect } from "react";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlants } from "../../redux/slices/plantsSlice";
import { CircularProgress } from "@mui/material";
import PinkButtonRound from "../../components/base/PinkButtonRound";
import AddIcon from "@mui/icons-material/Add";
import "./style.css";
import GrowingPlantCard from "../../components/common/GrowingPlantCard";

const GrowingPlantsPage = () => {
  const { plants, loading, error } = useSelector((state) => state.plants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlants());
  }, []);

  if (loading) {
    return <CircularProgress color="success" />;
  }

  if (error) {
    console.error(error);
  }

  console.log("Plants data:", plants);

  return (
    <div>
      <GardenerNavbar />
      <div className="btn-container">
        <PinkButtonRound label="Add Plant" endIcon={<AddIcon />} />
      </div>
      <div className="growing-plants-container">
        <h1>Growing Plants</h1>
        <h2>Plants</h2>
        <div className="growing-plt-cards-container">
          {plants.map((plant, index) =>
            plant.plantType === "plant" ? (
              <GrowingPlantCard
                name={plant.scientificName}
                date={plant.plantedDate}
              />
            ) : null
          )}
        </div>
        <h2>Flowers</h2>
        <div className="growing-plt-cards-container">
          {plants.map((plant, index) =>
            plant.plantType === "flower" ? (
              <GrowingPlantCard
                name={plant.scientificName}
                date={plant.plantedDate}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default GrowingPlantsPage;
