import React from "react";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import PinkButtonRound from "../../components/base/PinkButtonRound";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

const PostedPlantsPage = () => {
  const navigate = useNavigate();
  const { loading, postedPlants } = useSelector((state) => state.postedPlants);
  if (loading) return <CircularProgress />;
  console.log(postedPlants);
  

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
        <div>
          {/* {postedPlants.map((plant) => (
            <h2 key={plant.id} plant={plant}>{plant.plantName}</h2>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default PostedPlantsPage;
