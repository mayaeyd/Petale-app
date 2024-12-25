import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const GrowingPlantCard = ({ name, date, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/gardener/growing-plants/${id}`);
  };

  return (
    <div className="growing-plt-card" onClick={handleClick}>
      <h2>{name}</h2>
      <p>{date}</p>
    </div>
  );
};

export default GrowingPlantCard;
