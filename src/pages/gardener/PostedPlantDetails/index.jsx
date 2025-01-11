import React, { useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GardenerNavbar from "../../../components/common/GardenerNavbar";
import ImageGallery from "../../../components/base/ImageGallery";
import { fetchPostedPlantById } from "../../../redux/slices/postedPlantsSlice";
import { CircularProgress, Snackbar } from "@mui/material";
import { Flower, Leaf } from "lucide-react";

const PostedPlantDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedPlant, loading, error } = useSelector(
    (state) => state.postedPlants
  );

  useEffect(() => {
    dispatch(fetchPostedPlantById(id));
  }, [dispatch, id]);

  if (error)
    return (
      <>
        <GardenerNavbar />
        <Snackbar
          open={true}
          autoHideDuration={6000}
          message={`Error: ${error || "Something went wrong"}`}
        />
      </>
    );

  if (loading || !selectedPlant)
    return (
      <>
        <GardenerNavbar />
        <div className="spinner-container">
          <CircularProgress color="success" />
        </div>
      </>
    );

  const {
    plantName,
    plantType,
    price,
    description,
    harvestDate,
    quantity,
    images,
  } = selectedPlant;

  const date = harvestDate.split("T")[0];

  return (
    <>
      <GardenerNavbar />

      <div className="posted-plant-container">
        <ImageGallery images={images} />
        <div className="posted-plant-details">
          <h2>{plantName}</h2>
          <span>
            {plantType === "plant" ? (
              <Leaf color="#878787" strokeWidth="1" />
            ) : (
              <Flower color="#878787" strokeWidth="1" />
            )}
            <p>{plantType}</p>
          </span>
          <p className="posted-plant-price">${price}</p>
          <h3>Description</h3>
          <p className="posted-plant-description">{description}</p>
          <p className="posted-plant-quantity">
            Remaining {plantType}s: <span>{quantity}</span>
          </p>
          <p className="posted-plant-date">Harvested on {date}</p>
        </div>
      </div>
    </>
  );
};

export default PostedPlantDetails;
