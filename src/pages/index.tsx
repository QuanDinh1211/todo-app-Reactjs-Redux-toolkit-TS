import React from "react";
import { Outlet } from "react-router-dom";

import "../assets/styles/homeStyle.scss";
import Header from "../components/layout/Header";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
