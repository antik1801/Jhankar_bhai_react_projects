import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { createContext, useEffect } from "react";
export const ProductContext = createContext([]);
export const CardContext = createContext([]);


const App = () => {
  const loc = useLocation();
  const {cartArray,products} = useLoaderData();
  useEffect(()=>{
    if (loc.pathname === '/') {
      document.title = `HeroGadgets-Home`
    } else {
      document.title = `HeroGadgets${loc.pathname.replace('/','-')}`;
    }
  },[loc])

  // context API


  return(
  <ProductContext.Provider value={products}>
    <CardContext.Provider value={cartArray}>
    <Header></Header>
    <div className="min-h-[calc(100vh-137px)]">
    <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </CardContext.Provider>
  </ProductContext.Provider>
   
  );
};

export default App;
