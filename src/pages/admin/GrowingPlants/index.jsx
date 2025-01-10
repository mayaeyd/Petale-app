import React, { useState } from "react";
import AdminNavbar from "../../../components/common/AdminNavbar";
import PinkButtonRound from "../../../components/base/PinkButtonRound";
import "./style.css";
import { useSelector } from "react-redux";
import { selectAllPlants } from "../../../redux/admin/adminSlice";
import SortableTable from "../../../components/common/SortableTable";

const GrowingPlants = () => {
  const gardeners = useSelector(selectAllPlants);

  const headers = [
    { key: "gardenerName", label: "Gardener Name", sortable: true },
    { key: "gardenName", label: "Garden Name", sortable: true },
    { key: "location", label: "Location", sortable: true },
    { key: "plants", label: "Growing Plants", sortable: true },
  ];

  const getGrowingPlantsCount = (plants) => {
    return plants.filter((plant) => !plant.isHarvested).length;
  };

  const rows = gardeners.map((gardener) => ({
    gardenerName: gardener.gardenerName,
    gardenName: gardener.gardenName,
    location: gardener.location,
    plants: getGrowingPlantsCount(gardener.plants),
    id: gardener.gardenerId,
  }));

  return (
    <>
      <AdminNavbar />
      <div className="admin-growing-plants">
        <h1>Growing Plants</h1>
      </div>
    </>
  );
};

export default GrowingPlants;
