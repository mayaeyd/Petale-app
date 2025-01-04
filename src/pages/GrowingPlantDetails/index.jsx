import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlantById } from "../../redux/slices/plantsSlice";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import "./style.css";
import { CircularProgress, Snackbar } from "@mui/material";
import PinkButtonRound from "../../components/base/PinkButtonRound";
import AgricultureIcon from "@mui/icons-material/Agriculture";

const GrowingPlantDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedPlant, loading, error } = useSelector(
    (state) => state.plants
  );

  useEffect(() => {
    dispatch(fetchPlantById(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <>
        <GardenerNavbar />
        <div className="spinner-container">
          <CircularProgress color="success" />
        </div>
      </>
    );
  }

  if (error)
    return (
      <Snackbar
        open={true}
        autoHideDuration={6000}
        message={`Error: ${error || "Something went wrong"}`}
      />
    );

  if (!selectedPlant) {
    return <div>No plant data available</div>;
  }

  const { scientificName, plantedDate, plantType } = selectedPlant.plant;

  const date = plantedDate?.split("T")[0];

  return (
    <>
      <GardenerNavbar />
      <div className="plant-details-container">
        <div className="plant-name-type">
          <h1>{scientificName}</h1>

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
        </div>
        <p className="planted-date">Planted on {date}</p>
        <div>
          <div className="sensor-data-container">
            <h2>Environmental Metrics</h2>
            <div className="sensor-data">
              <div>
                <p>Soil Moisture</p>
                <p>50%</p>
              </div>
              <div>
                <p>Temperature</p>
                <p>20°C</p>
              </div>
              <div>
                <p>Humidity</p>
                <p>50%</p>
              </div>
            </div>
          </div>
          <div className="sensor-data-container">
            <h2>Automated Watering Schedule</h2>
          </div>
        </div>
        <div>
          <PinkButtonRound
            endIcon={<AgricultureIcon />}
            label="Harvest"
            fullWidth
          />
        </div>
      </div>
    </>
  );
};

export default GrowingPlantDetails;
