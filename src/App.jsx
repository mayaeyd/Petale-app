import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/fonts.css";

import RolePage from "./pages/auth/RolePage";
import SignUpGardener from "./pages/auth/SignUpGardener";
import SignUpUser from "./pages/auth/SignUpUser";
import Login from "./pages/auth/Login";

import UserHomePage from "./pages/user/UserHomePage";
import FlowerRecognition from "./pages/user/FlowerRecognition";

import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import UserDetails from "./pages/admin/UserDetails";
import Marketplace from "./pages/admin/Marketplace";
import Orders from "./pages/admin/Orders";
import GrowingPlants from "./pages/admin/GrowingPlants";

import UsersRoutes from "./components/routes/UsersRoutes";
import GardenersRoutes from "./components/routes/GardenersRoutes";
import AdminRoutes from "./components/routes/AdminsRoutes";

import GrowingPlantsPage from "./pages/gardener/GrowingPlantsPage";
import GrowingPlantDetails from "./pages/gardener/GrowingPlantDetails";
import PostedPlantsPage from "./pages/gardener/PostedPlantsPage";
import PostPlantForm from "./pages/gardener/PostPlantForm";
import PlantMonitor from "./pages/gardener/PlantMonitor";
import PostedPlantDetails from "./pages/gardener/PostedPlantDetails";
import SoldPlantsPage from "./pages/gardener/SoldPlantsPage";
import SoldPlantDetails from "./pages/gardener/SoldPlantDetails";

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
          <Route path="/gardener/sold-plants" element={<SoldPlantsPage />} />
          <Route
            path="/gardener/sold-plants/:id"
            element={<SoldPlantDetails />}
          />
        </Route>
        <Route path="/admin" element={<AdminRoutes />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/users/:id" element={<UserDetails />} />
          <Route path="/admin/marketplace" element={<Marketplace />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/growing-plants" element={<GrowingPlants />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
