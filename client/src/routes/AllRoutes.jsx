import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import LandingPage from "../pages/LandingPage/LandingPage";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
