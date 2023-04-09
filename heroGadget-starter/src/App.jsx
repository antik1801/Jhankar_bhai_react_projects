import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { useEffect } from "react";


const App = () => {
  const loc = useLocation();
  useEffect(()=>{
    if (loc.pathname === '/') {
      document.title = `HeroGadgets-Home`
    } else {
      document.title = `HeroGadgets${loc.pathname.replace('/','-')}`;
    }
  },[loc])
  return(<>
    <Header></Header>
    <div className="min-h-[calc(100vh-137px)]">
    <Outlet></Outlet>
    </div>
    <Footer></Footer>
  </>);
};

export default App;
