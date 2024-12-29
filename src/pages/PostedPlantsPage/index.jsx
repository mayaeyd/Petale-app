import React from "react";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import PinkButtonRound from "../../components/base/PinkButtonRound";
import "./style.css";

const PostedPlantsPage = () => {
  return (
    <div>
      <GardenerNavbar />
      <div className="posted-plants-container">
        <PinkButtonRound label="Post Plant" />
      </div>
    </div>
  );
};

export default PostedPlantsPage;
