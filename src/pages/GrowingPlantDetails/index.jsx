import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlantById } from "../../redux/slices/plantsSlice";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import "./style.css";

const GrowingPlantDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedPlant, loading, error } = useSelector(
    (state) => state.plants
  );

  useEffect(() => {
    dispatch(fetchPlantById(id));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!selectedPlant) {
    return <div>No plant data available</div>;
  }

  const { scientificName, plantedDate, plantType } = selectedPlant.plant;

  return (
    <>
      <GardenerNavbar />
      <div className="plant-details-container">
        {scientificName}
        {plantedDate}
        {plantType}
      </div>
    </>
  );
};

export default GrowingPlantDetails;
