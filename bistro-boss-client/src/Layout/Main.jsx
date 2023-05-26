import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signup')
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Bistro - home";
    } else {
      document.title = `Bistro ${location.pathname.replace("/", "- ")}`;
    }
    if (location.state) {
      document.title = location.state;
    }
  }, [location]);
  return (
    <div className="">
     { noHeaderFooter || <NavBar></NavBar> }
      <div className="mb-24">
        <Outlet></Outlet>
      </div>
     { noHeaderFooter || <Footer></Footer> }
    </div>
  );
};

export default Main;
