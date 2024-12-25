import React, { useEffect } from "react";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlants } from "../../redux/slices/plantsSlice";
import { CircularProgress } from "@mui/material";

const GrowingPlantsPage = () => {
  const { plants, loading, error } = useSelector((state) => state.plants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlants());
  }, []);

  if (loading) {
    return <CircularProgress color="success" />;
  }

  if (error) {
    console.error(error);
  }

  console.log("Plants data:", plants);

  return (
    <div>
      <GardenerNavbar />
    </div>
  );
};

export default GrowingPlantsPage;
