import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PostedPlantDetails = () => {
  const { id } = useParams();
  const { postedPlants, loading, error } = useSelector(
    (state) => state.postedPlants
  );
  const plant = postedPlants.find((plant) => plant._id === id);
  console.log(plant);

  return <div></div>;
};

export default PostedPlantDetails;
