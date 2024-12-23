import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RolePage from "./pages/auth/RolePage";
import "./styles/fonts.css";
import SignUpGardener from "./pages/auth/SignUpGardener";
import SignUpUser from "./pages/auth/SignUpUser";
import Login from "./pages/auth/Login";
import UserHomePage from "./pages/UserHomePage";
import UsersRoutes from "./components/routes/UsersRoutes";
import { getSelf } from "./redux/slices/authSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelf());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/role" element={<RolePage />} />
        <Route path="/signup/gardener" element={<SignUpGardener />} />
        <Route path="/signup/user" element={<SignUpUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UsersRoutes />}>
          <Route path="/user/home" element={<UserHomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
