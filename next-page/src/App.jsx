import React, { useEffect } from "react";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// This is the main container
const App = () => {
  const loc = useLocation();
  console.log(loc);
  useEffect(()=>{
    if (loc.pathname === '/') {
      document.title = 'Next - home'
    }
    else{
      document.title = `Next ${loc.pathname.replace("/","- ")}`;
    }
    if (loc.state) {
      document.title = loc.state
    }
  },[loc])
  return (
    <div className="mx-8">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
