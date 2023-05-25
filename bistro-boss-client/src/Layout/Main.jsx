import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Main = () => {
  const loc = useLocation();
  useEffect(() => {
    if (loc.pathname === "/") {
      document.title = "Bistro - home";
    } else {
      document.title = `Bistro ${loc.pathname.replace("/", "- ")}`;
    }
    if (loc.state) {
      document.title = loc.state;
    }
  }, [loc]);
  return (
    <div className="">
      <NavBar></NavBar>
      <div className="mb-24">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
