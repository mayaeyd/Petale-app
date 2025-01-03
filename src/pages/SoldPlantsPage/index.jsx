import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SoldPlantsPage = () => {
  const navigate = useNavigate();
  const { loading, soldPlants } = useSelector((state) => state.soldPlants);

  if (loading) return <CircularProgress />;

  return (
    <div>
      <GardenerNavbar />
    </div>
  );
};

export default SoldPlantsPage;
