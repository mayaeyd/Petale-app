import React from "react";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import PinkButtonRound from "../../components/base/PinkButtonRound";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import GardenerPlantCard from "../../components/common/GardenerPlantCard";

const PostedPlantsPage = () => {
  const navigate = useNavigate();
  const { loading, postedPlants } = useSelector((state) => state.postedPlants);

  if (loading) return <CircularProgress />;

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
        <div className="posted-cards-container">
          {postedPlants.map((plant) => (
            <GardenerPlantCard
              key={plant._id}
              imageSrc={plant.images[0]}
              title={plant.plantName}
              description={plant.description}
              price={plant.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostedPlantsPage;
