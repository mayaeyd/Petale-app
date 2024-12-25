import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlantById } from "../../redux/slices/plantsSlice";

const GrowingPlantDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedPlant, loading, error } = useSelector(
    (state) => state.plants
  );

  useEffect(() => {
    dispatch(fetchPlantById(id));
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const { scientificName, plantedDate, plantType } = selectedPlant.plant;

  return <div>{scientificName}</div>;
};

export default GrowingPlantDetails;
