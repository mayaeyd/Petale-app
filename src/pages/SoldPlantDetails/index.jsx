import React, { useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import ImageGallery from "../../components/base/ImageGallery";
import { fetchSoldPlantById } from "../../redux/slices/soldPlantsSlice";
import { CircularProgress, default as Snackbar } from "@mui/material";
import React from "react";

const SoldPlantDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedPlant, loading, error } = useSelector(
    (state) => state.soldPlants
  );

  useEffect(() => {
    dispatch(fetchSoldPlantById(id));
  }, [dispatch, id]);

  if (loading || !selectedPlant)
    return (
      <>
        <GardenerNavbar />
        <div
          style={{
            marginLeft: "250px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      </>
    );

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

  const { plantName, plantType, price, description, harvestDate, images } =
    selectedPlant;

  const date = harvestDate.split("T")[0];

  return (
    <>
      <GardenerNavbar />

      <div className="sold-plant-container">
        <ImageGallery images={images} />
        <div className="sold-plant-details">
          <h2>{plantName}</h2>
          <span>
            {plantType === "plant" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#878787"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-leaf"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#878787"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-flower"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
                <path d="M12 7.5V9" />
                <path d="M7.5 12H9" />
                <path d="M16.5 12H15" />
                <path d="M12 16.5V15" />
                <path d="m8 8 1.88 1.88" />
                <path d="M14.12 9.88 16 8" />
                <path d="m8 16 1.88-1.88" />
                <path d="M14.12 14.12 16 16" />
              </svg>
            )}
            <p>{plantType}</p>
          </span>
          <p className="sold-plant-price">${price}</p>
          <h3>Description</h3>
          <p className="sold-plant-description">{description}</p>
          <p className="sold-plant-date">Harvested on {date}</p>
        </div>
      </div>
    </>
  );
};

export default SoldPlantDetails;
