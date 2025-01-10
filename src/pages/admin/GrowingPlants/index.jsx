import React, { useState } from "react";
import AdminNavbar from "../../../components/common/AdminNavbar";
import PinkButtonRound from "../../../components/base/PinkButtonRound";
import "./style.css";
import { useSelector } from "react-redux";
import { selectAllPlants } from "../../../redux/admin/adminSlice";

const GrowingPlants = () => {
  const gardeners = useSelector(selectAllPlants);

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
