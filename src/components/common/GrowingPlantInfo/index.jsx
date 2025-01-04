import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.css";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import PinkButtonRound from "../../base/PinkButtonRound";
import { harvestPlant } from "../../../redux/slices/plantsSlice";

const GrowingPlantInfo = ({ plant }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  return (
    <>
      <div className="plant-info-container">
        <div>
          <div className="sensor-data-container">
            <h2>Environmental Metrics</h2>
            <div className="sensor-data">
              <div>
                <p>Soil Moisture</p>
                <p>50%</p>
              </div>
              <div>
                <p>Temperature</p>
                <p>20°C</p>
              </div>
              <div>
                <p>Humidity</p>
                <p>50%</p>
              </div>
            </div>
          </div>
          <div className="sensor-data-container">
            <h2>Automated Watering Schedule</h2>
          </div>
        </div>
        <div>
          <PinkButtonRound
            endIcon={<AgricultureIcon />}
            label="Harvest"
            fullWidth
            onClick={() => dispatch(harvestPlant(id))}
          />
        </div>
      </div>
    </>
  );
};

export default GrowingPlantInfo;
