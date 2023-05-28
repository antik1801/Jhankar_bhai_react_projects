import React from "react";
import Header from "../components/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";

const Main = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
