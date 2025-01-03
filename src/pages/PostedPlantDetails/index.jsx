import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import ImageGallery from "../../components/base/ImageGallery";

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

      <div className="posted-plant-container">
        <ImageGallery images={images} />
        <div className="posted-plant-details">
          <h2>{plantName}</h2>
        </div>
      </div>
    </>
  );
};

export default PostedPlantDetails;
