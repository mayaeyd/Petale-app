import React from "react";
import "./style.css";

const GrowingPlantCard = ({ name, date, ...props }) => {
  const plantedDate = date?.split("T")[0];

  return (
    <div className="growing-plt-card" {...props}>
      <h2>
        {name
          .split(" ")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ")}
      </h2>
      <p>{plantedDate}</p>
    </div>
  );
};

export default GrowingPlantCard;
