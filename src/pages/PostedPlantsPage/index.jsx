import React from "react";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import PinkButtonRound from "../../components/base/PinkButtonRound";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import "./style.css";
import { useNavigate } from "react-router-dom";

const PostedPlantsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <GardenerNavbar />
      <div className="posted-plants-container">
        <div className="btn-container">
          <PinkButtonRound
            label="Post Plant"
            onClick={() => navigate("/gardener/post-plant")}
            endIcon={<EventAvailableIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default PostedPlantsPage;
