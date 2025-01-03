import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GardenerPlantCard from "../../components/common/GardenerPlantCard";
import { CircularProgress } from "@mui/material";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import "./style.css";

const SoldPlantsPage = () => {
  const navigate = useNavigate();
  const { loading, soldPlants } = useSelector((state) => state.soldPlants);

  const handleClick = (plantId) => {
    navigate(`/gardener/posted-plants/${plantId}`);
  };

  if (loading) return <CircularProgress />;
  if (soldPlants.length === 0)
    return (
      <>
        <GardenerNavbar />
        <div style={{ marginLeft: "250px" }}>No sold plants yet</div>
      </>
    );

  return (
    <div>
      <GardenerNavbar />
      <div className="sold-plants-container">
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
      </div>
    </div>
  );
};

export default SoldPlantsPage;
