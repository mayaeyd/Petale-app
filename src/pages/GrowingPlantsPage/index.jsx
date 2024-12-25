import React, { useEffect } from "react";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlants } from "../../redux/slices/plantsSlice";
import { CircularProgress } from "@mui/material";
import PinkButtonRound from "../../components/base/PinkButtonRound";
import AddIcon from "@mui/icons-material/Add";
import "./style.css";

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
        {plants.map((plant, index) =>
          plant.plantType === "plant" ? (
            <h1>Plant: {plant.scientificName}</h1>
          ) : null
        )}
        <h2>Flowers</h2>
        {plants.map((plant, index) =>
          plant.plantType === "flower" ? (
            <h1>Plant: {plant.scientificName}</h1>
          ) : null
        )}
      </div>
    </div>
  );
};

export default GrowingPlantsPage;
