import React from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router-dom";

const Home = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header />
      <h1>Home</h1>
      <div>{navigation.state === "loading" && "Loading...."}</div>
      <Outlet />
    </div>
  );
};

export default Home;
