import React, { useState } from "react";
import AdminNavbar from "../../../components/common/AdminNavbar";
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

  return (
    <>
      <AdminNavbar />
      <div className="admin-growing-plants">
        <h1>Growing Plants</h1>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th
                  onClick={() => handleSort("gardenerName")}
                  className="sortable"
                >
                  Gardener Name
                  {sortConfig.key === "gardenerName" && (
                    <span className="sort-indicator">
                      {sortConfig.direction === "ascending" ? " ↑" : " ↓"}
                    </span>
                  )}
                </th>
                <th
                  onClick={() => handleSort("gardenName")}
                  className="sortable"
                >
                  Garden Name
                  {sortConfig.key === "gardenName" && (
                    <span className="sort-indicator">
                      {sortConfig.direction === "ascending" ? " ↑" : " ↓"}
                    </span>
                  )}
                </th>
                <th onClick={() => handleSort("location")} className="sortable">
                  Location
                  {sortConfig.key === "location" && (
                    <span className="sort-indicator">
                      {sortConfig.direction === "ascending" ? " ↑" : " ↓"}
                    </span>
                  )}
                </th>
                <th onClick={() => handleSort("plants")} className="sortable">
                  Growing Plants
                  {sortConfig.key === "plants" && (
                    <span className="sort-indicator">
                      {sortConfig.direction === "ascending" ? " ↑" : " ↓"}
                    </span>
                  )}
                </th>
                <th>Actions</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
};

export default GrowingPlants;
