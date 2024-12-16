import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RolePage from "./pages/auth/RolePage";
import "./styles/fonts.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/role" element={<RolePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
