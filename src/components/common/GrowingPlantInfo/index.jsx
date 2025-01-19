import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.css";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import PinkButtonRound from "../../base/PinkButtonRound";
import { harvestPlant } from "../../../redux/slices/plantsSlice";
import { io } from "socket.io-client";
import { Droplets } from "lucide-react";
import Input from "../../base/Input";

const GrowingPlantInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [socket, setSocket] = useState(null);
  const [sensorData, setSensorData] = useState({
    temperature: 0,
    humidity: 0,
    soil_moisture: 0,
  });
  const [schedule, setSchedule] = useState({
    hour: 8,
    minute: 0,
    duration: 10,
    enabled: true,
  });

  useEffect(() => {
    const newSocket = io("http://192.168.44.162:8080");

    newSocket.on("sensor_data", (data) => {
      setSensorData(data);
    });

    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  const handleWaterNow = () => {
    socket?.emit("water_now", 10);
  };

  const handleScheduleUpdate = (newSchedule) => {
    socket?.emit("update_schedule", newSchedule);
    setSchedule(newSchedule);
  };

  return (
    <>
      <div className="plant-info-container">
        <div>
          <div className="sensor-data-container">
            <h2>Environmental Metrics</h2>
            <div className="sensor-data">
              <div>
                <p>Soil Moisture</p>
                <p>
                  {id == "677f0aab0fd919dd992f1a6b"
                    ? `${sensorData.soil_moisture}%`
                    : "50%"}
                </p>
              </div>
              <div>
                <p>Temperature</p>
                <p>
                  {id == "677f0aab0fd919dd992f1a6b"
                    ? `${sensorData.temperature}°C`
                    : "20°C"}
                </p>
              </div>
              <div>
                <p>Humidity</p>
                <p>
                  {id == "677f0aab0fd919dd992f1a6b"
                    ? `${sensorData.humidity}%`
                    : "50%"}
                </p>
              </div>
            </div>
          </div>
          <div className="sensor-data-container">
            <h2>Automated Watering Schedule</h2>
            <div className="schedule-controls">
              <div>
                <Input
                  label="Hour"
                  inputColor="#383838"
                  height="40px"
                  type="number"
                  min="0"
                  max="23"
                  value={schedule.hour}
                  onChange={(e) =>
                    handleScheduleUpdate({
                      ...schedule,
                      hour: parseInt(e.target.value),
                    })
                  }
                />
              </div>
              <div>
                <Input
                  label="Minute"
                  inputColor="#383838"
                  type="number"
                  min="0"
                  max="59"
                  value={schedule.minute}
                  onChange={(e) =>
                    handleScheduleUpdate({
                      ...schedule,
                      minute: parseInt(e.target.value),
                    })
                  }
                />
              </div>
              <div>
                <Input
                  label="Duration (seconds)"
                  inputColor="#383838"
                  type="number"
                  min="1"
                  value={schedule.duration}
                  onChange={(e) =>
                    handleScheduleUpdate({
                      ...schedule,
                      duration: parseInt(e.target.value),
                    })
                  }
                />
              </div>
              <div>
                <label style={{ fontFamily: "Proxima Nova Thin" }}>
                  Enabled:{" "}
                </label>
                <input
                  type="checkbox"
                  className="enable-checkbox"
                  checked={schedule.enabled}
                  onChange={(e) =>
                    handleScheduleUpdate({
                      ...schedule,
                      enabled: e.target.checked,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <PinkButtonRound
            endIcon={<Droplets />}
            label="Water Now"
            fullWidth
            onClick={handleWaterNow}
          />
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
