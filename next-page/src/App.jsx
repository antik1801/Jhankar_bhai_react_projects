import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
// This is the main container
const App = () => {
  return (
    <div className="mx-8">
      <Header></Header>
      <Outlet></Outlet>
      {/* Footer */}
    </div>
  );
};

export default App;
