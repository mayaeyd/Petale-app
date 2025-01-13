import React from "react";
import GardenerNavbar from "../../../components/common/GardenerNavbar";
import PinkButtonRound from "../../../components/base/PinkButtonRound";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import GardenerPlantCard from "../../../components/common/GardenerPlantCard";

const PostedPlantsPage = () => {
  const navigate = useNavigate();
  const { loading, postedPlants } = useSelector((state) => state.postedPlants);

  const handleClick = (plantId) => {
    navigate(`/gardener/posted-plants/${plantId}`);
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
    <div>
      <GardenerNavbar />
      <div className="posted-plants-container">
        <div className="button-container">
          <PinkButtonRound
            label="Post Plant"
            onClick={() => navigate("/gardener/post-plant")}
            endIcon={<EventAvailableIcon />}
          />
        </div>
        {postedPlants.length > 0 ? (
          <>
            {postedPlants.filter((plant) => plant.plantType === "plant")
              .length > 0 ? (
              <>
                <h1>Plants</h1>
                <div className="posted-cards-container">
                  {postedPlants.map((plant) =>
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
            ) : (
              ""
            )}
            {postedPlants.filter((plant) => plant.plantType === "flower")
              .length > 0 ? (
              <>
                <h1>Flowers</h1>
                <div className="posted-cards-container">
                  {postedPlants.map((plant) =>
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
            ) : (
              ""
            )}
          </>
        ) : (
          <p>No plants posted yet</p>
        )}
      </div>
    </div>
  );
};

export default PostedPlantsPage;
