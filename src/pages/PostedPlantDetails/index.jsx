import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GardenerNavbar from "../../components/common/GardenerNavbar";

const PostedPlantDetails = () => {
  const { id } = useParams();
  const { postedPlants, loading, error } = useSelector(
    (state) => state.postedPlants
  );
  const {
    plantName,
    plantType,
    price,
    quantity,
    description,
    harvestDate,
    images,
  } = postedPlants.find((plant) => plant._id === id);

  return (
    <>
      <GardenerNavbar />
    </>
  );
};

export default PostedPlantDetails;
