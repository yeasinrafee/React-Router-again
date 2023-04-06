import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <Outlet />
    </div>
  );
};

export default Home;
