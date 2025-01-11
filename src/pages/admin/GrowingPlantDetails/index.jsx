import React, { useEffect } from "react";
import AdminNavbar from "../../../components/common/AdminNavbar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { userThunks } from "../../../redux/admin/thunks/userThunks";
import {
  selectSelectedUser,
  selectUsersLoading,
} from "../../../redux/admin/adminSlice";
import "./style.css";

const GrowingPlantDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectUsersLoading);
  const gardener = useSelector(selectSelectedUser);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userThunks.fetchUserById(id));
  }, [dispatch, id]);

  if (loading || !gardener)
    return (
      <div className="spinner-container">
        <CircularProgress />
      </div>
    );

  const plants = gardener.gardenerProfile.garden.plants;

  const formatDate = (date) => {
    const dateformat = new Date(date);

    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(dateformat);
  };
  console.log(gardener);

  return (
    <>
      <AdminNavbar />
      <div className="growing-plants">
        <h1>Growing Plants Details</h1>
        <div className="cards-grid">
          <div className="gardener-card">
            <div className="gardener-header">
              <h2>
                {gardener.firstName} {gardener.lastName}
              </h2>
              <span className="location">
                {gardener.gardenerProfile.garden.location}
              </span>
            </div>
            <div className="garden-info">
              <span className="garden-name">
                {gardener.gardenerProfile.garden.name}
              </span>
              <span className="email">{gardener.email}</span>
            </div>
            <div className="plants-container">
              <h3>Plants</h3>
              {plants
                .filter((plant) => plant.isHarvested === false)
                .map((plant) => (
                  <div key={plant._id} className="plant-card">
                    <div className="plant-header">
                      <span className="plant-name">{plant.scientificName}</span>
                      <span
                        className={`plant-status ${
                          plant.isHarvested ? "harvested" : "growing"
                        }`}
                      >
                        {plant.isHarvested ? "Harvested" : "Growing"}
                      </span>
                    </div>
                    <div className="plant-details">
                      <span className="plant-type">{plant.plantType}</span>
                      <span className="planted-date">
                        Planted: {formatDate(plant.plantedDate)}
                      </span>
                    </div>
                    <div className="sensor-data">
                      <div className="sensor-item">
                        <span className="sensor-label">Moisture:</span>
                        <span className="sensor-value">
                          {plant.sensorData.currentMoisture}%
                        </span>
                      </div>
                      <div className="sensor-item">
                        <span className="sensor-label">Humidity:</span>
                        <span className="sensor-value">
                          {plant.sensorData.currentHumidity}%
                        </span>
                      </div>
                      <div className="sensor-item">
                        <span className="sensor-label">Temperature:</span>
                        <span className="sensor-value">
                          {plant.sensorData.currentTemperature}°C
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              {plants
                .filter((plant) => plant.isHarvested === true)
                .map((plant) => (
                  <div key={plant._id} className="plant-card">
                    <div className="plant-header">
                      <span className="plant-name">{plant.scientificName}</span>
                      <span
                        className={`plant-status ${
                          plant.isHarvested ? "harvested" : "growing"
                        }`}
                      >
                        {plant.isHarvested ? "Harvested" : "Growing"}
                      </span>
                    </div>
                    <div className="plant-details">
                      <span className="plant-type">{plant.plantType}</span>
                      <span className="planted-date">
                        Planted: {formatDate(plant.plantedDate)}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrowingPlantDetails;
