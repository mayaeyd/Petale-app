import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/fonts.css";

import SignUpGardener from "./pages/auth/SignUpGardener";
import SignUpUser from "./pages/auth/SignUpUser";
import Login from "./pages/auth/Login";

import RolePage from "./pages/auth/RolePage";
import UserHomePage from "./pages/UserHomePage";
import GrowingPlantsPage from "./pages/GrowingPlantsPage";
import GrowingPlantDetails from "./pages/GrowingPlantDetails";

import UsersRoutes from "./components/routes/UsersRoutes";
import GardenersRoutes from "./components/routes/GardenersRoutes";
import FlowerRecognition from "./pages/FlowerRecognition";
import PostedPlantsPage from "./pages/PostedPlantsPage";
import PostPlantForm from "./pages/PostPlantForm";
import PlantMonitor from "./pages/PlantMonitor";
import PostedPlantDetails from "./pages/PostedPlantDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/role" element={<RolePage />} />
        <Route path="/signup/gardener" element={<SignUpGardener />} />
        <Route path="/signup/user" element={<SignUpUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plant-info" element={<PlantMonitor />} />
        <Route path="/user" element={<UsersRoutes />}>
          <Route path="/user/home" element={<UserHomePage />} />
          <Route path="/user/predict-flower" element={<FlowerRecognition />} />
        </Route>
        <Route path="/gardener" element={<GardenersRoutes />}>
          <Route
            path="/gardener/growing-plants"
            element={<GrowingPlantsPage />}
          />
          <Route
            path="/gardener/growing-plants/:id"
            element={<GrowingPlantDetails />}
          />
          <Route
            path="/gardener/posted-plants"
            element={<PostedPlantsPage />}
          />
          <Route
            path="/gardener/posted-plants/:id"
            element={<PostedPlantDetails />}
          />
          <Route path="/gardener/post-plant" element={<PostPlantForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
