import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GardenerPlantCard from "../../../components/common/GardenerPlantCard";
import { CircularProgress } from "@mui/material";
import GardenerNavbar from "../../../components/common/GardenerNavbar";
import "./style.css";

const SoldPlantsPage = () => {
  const navigate = useNavigate();
  const { loading, soldPlants } = useSelector((state) => state.soldPlants);

  const handleClick = (plantId) => {
    navigate(`/gardener/sold-plants/${plantId}`);
  };

  if (loading)
    return (
      <>
        <GardenerNavbar />
        <div className="spinner-container">
          <CircularProgress color="success" />
        </div>
      </>
    );

  return (
    <>
      <GardenerNavbar />
      <div className="sold-plants-container">
        {soldPlants.length > 0 ? (
          <>
            {soldPlants.filter((plant) => plant.plantType === "plant").length >
              0 && (
              <>
                <h1>Plants</h1>
                <div className="sold-cards-container">
                  {soldPlants.map((plant) =>
                    plant.plantType === "plant" ? (
                      <GardenerPlantCard
                        key={plant._id}
                        imageSrc={plant.images[0]}
                        title={plant.plantName}
                        description={plant.description}
                        price={plant.price}
                        onClick={() => handleClick(plant._id)}
                      />
                    ) : null
                  )}
                </div>
              </>
            )}

            {soldPlants.filter((plant) => plant.plantType === "flower").length >
              0 && (
              <>
                <h1>Flowers</h1>
                <div className="sold-cards-container">
                  {soldPlants.map((plant) =>
                    plant.plantType === "flower" ? (
                      <GardenerPlantCard
                        key={plant._id}
                        imageSrc={plant.images[0]}
                        title={plant.plantName}
                        description={plant.description}
                        price={plant.price}
                        onClick={() => handleClick(plant._id)}
                      />
                    ) : null
                  )}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="empty-state-container" style={{ marginTop: "90px" }}>
            <p>No Plants Yet</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SoldPlantsPage;
