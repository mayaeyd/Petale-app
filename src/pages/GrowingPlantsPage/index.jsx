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
