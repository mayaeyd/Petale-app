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
        {plants.map((plant, index) => (
          <h1>{plant.scientificName}</h1>
        ))}
      </div>
    </div>
  );
};

export default GrowingPlantsPage;
