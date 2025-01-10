import React, { useState } from "react";
import AdminNavbar from "../../../components/common/AdminNavbar";
import PinkButtonRound from "../../../components/base/PinkButtonRound";
import "./style.css";
import { useSelector } from "react-redux";
import { selectAllPlants } from "../../../redux/admin/adminSlice";

const GrowingPlants = () => {
  const gardeners = useSelector(selectAllPlants);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const getGrowingPlantsCount = (plants) => {
    return plants.filter((plant) => !plant.isHarvested).length;
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Apply sorting to data
  const sortedGardeners = [...gardeners].sort((a, b) => {
    if (!sortConfig.key) return 0;

    let aVal = a[sortConfig.key];
    let bVal = b[sortConfig.key];

    if (sortConfig.key === "plants") {
      aVal = getGrowingPlantsCount(a.plants);
      bVal = getGrowingPlantsCount(b.plants);
    }

    if (aVal < bVal) return sortConfig.direction === "ascending" ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === "ascending" ? 1 : -1;
    return 0;
  });

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
