import React, { useEffect } from "react";
import LogoText from "../../../assets/images/LogoText";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { GetSelf } from "../../../redux/slices/authSlice";

const GardenerNavbar = () => {
  //   const state = useSelector((state) => state.auth);

  //   const dispatch = useDispatch();

  //   useEffect(()=>{
  //       dispatch(GetSelf())
  //       console.log("fromnavbar", state.user);
  //   },[])

  return (
    <nav className="gardener-navbar">
      <div>
        <LogoText />
        <div className="gardener-info">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="17" cy="17" r="17" fill="#D9D9D9" />
          <div className="gardener-name">
            <h3>John Doe</h3>
            <p>John Doe Co.</p>
          </div>
        </svg>
        </div>
      </div>
    </nav>
  );
};

export default GardenerNavbar;
