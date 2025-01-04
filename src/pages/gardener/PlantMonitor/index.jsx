import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./style.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PlantMonitor = () => {
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
    const newSocket = io("http://192.168.0.196:8080");

    newSocket.on("sensor_data", (data) => {
      setSensorData(data);
    });

    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  const handleWaterNow = () => {
    socket?.emit("water_now", 10); // 10 seconds default duration
  };

  const handleScheduleUpdate = (newSchedule) => {
    socket?.emit("update_schedule", newSchedule);
    setSchedule(newSchedule);
  };

  return (
    <div className="container">
      <div className="grid-container">
        <div className="card">
          <h3 className="card-title">Temperature</h3>
          <p className="card-value">{sensorData.temperature}°C</p>
        </div>
        <div className="card">
          <h3 className="card-title">Humidity</h3>
          <p className="card-value">{sensorData.humidity}%</p>
        </div>
        <div className="card">
          <h3 className="card-title">Soil Moisture</h3>
          <p className="card-value">{sensorData.soil_moisture}%</p>
        </div>
      </div>
      <div className="schedule-controls">
        <div>
          <label>Hour: </label>
          <input
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
          <label>Minute: </label>
          <input
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
          <label>Duration (seconds): </label>
          <input
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
          <label>Enabled: </label>
          <input
            type="checkbox"
            checked={schedule.enabled}
            onChange={(e) =>
              handleScheduleUpdate({ ...schedule, enabled: e.target.checked })
            }
          />
        </div>
      </div>

      <div className="button-container">
        <button onClick={handleWaterNow} className="water-now-button">
          Water Now
        </button>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={[sensorData]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
            <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
            <Line type="monotone" dataKey="soil_moisture" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PlantMonitor;
