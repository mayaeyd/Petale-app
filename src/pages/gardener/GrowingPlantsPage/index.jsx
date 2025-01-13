import React from "react";
import GardenerNavbar from "../../../components/common/GardenerNavbar";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import "./style.css";
import GrowingPlantCard from "../../../components/common/GrowingPlantCard";
import FormPopup from "../../../components/common/FormPopup";
import { useNavigate } from "react-router-dom";

const GrowingPlantsPage = () => {
  const { plants, loading, error } = useSelector((state) => state.plants);
  const navigate = useNavigate();

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

  if (error) {
    console.error(error);
  }

  return (
    <div>
      <GardenerNavbar />
      <div className="button-container">
        <FormPopup />
      </div>
      <div className="growing-plants-container">
        {plants.length > 0 ? (
          <>
            {plants.filter((plant) => plant.plantType === "plant").length >
            0 ? (
              <>
                <h1>Plants</h1>
                <div className="growing-plt-cards-container">
                  {plants.map((plant) =>
                    plant.plantType === "plant" ? (
                      <GrowingPlantCard
                        key={plant._id}
                        name={plant.scientificName}
                        date={plant.plantedDate}
                        onClick={() =>
                          navigate(`/gardener/growing-plants/${plant._id}`)
                        }
                      />
                    ) : null
                  )}
                </div>
              </>
            ) : (
              ""
            )}
            {plants.filter((plant) => plant.plantType === "flower").length >
            0 ? (
              <>
                <h1>Flowers</h1>
                <div className="growing-plt-cards-container">
                  {plants.map((plant) =>
                    plant.plantType === "flower" ? (
                      <GrowingPlantCard
                        key={plant._id}
                        name={plant.scientificName}
                        date={plant.plantedDate}
                        onClick={() =>
                          navigate(`/gardener/growing-plants/${plant._id}`)
                        }
                      />
                    ) : null
                  )}
                </div>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          <p>No growing plants yet</p>
        )}
      </div>
    </div>
  );
};

export default GrowingPlantsPage;
