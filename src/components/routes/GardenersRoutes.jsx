import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const GardenersRoutes = () => {
  const navigate = useNavigate();
  const [check, setCheck] = useState(true);


  return check ? <Outlet /> : <Navigate to={"/"} />;
}

export default GardenersRoutes
