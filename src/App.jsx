import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RolePage from "./pages/auth/RolePage";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/role" element={<RolePage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
