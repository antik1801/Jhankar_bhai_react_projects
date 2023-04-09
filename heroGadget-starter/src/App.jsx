import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { createContext, useEffect, useState } from "react";
import Modal from "./components/Modal";

export const ProductContext = createContext([]);
export const CardContext = createContext([]);

const App = () => {
  
  const loc = useLocation();
  let [isOpen, setIsOpen] = useState(false)
  const { cartArray, products } = useLoaderData();
  const [cart,setCart] = useState(cartArray);

  const cartAlert = sessionStorage.getItem('alert')
  if(cart.length > 0 && cartAlert !== 'true'){
    setIsOpen(true);
    sessionStorage.setItem('alert', true);
  }


  useEffect(() => {
    if (loc.pathname === "/") {
      document.title = `HeroGadgets-Home`;
    } else {
      document.title = `HeroGadgets${loc.pathname.replace("/", "-")}`;
    }
  }, [loc]);

  // context API

  return (
    <ProductContext.Provider value={products}>
      <CardContext.Provider value={[cart,setCart]}>
        <Header></Header>
        <div className="min-h-[calc(100vh-137px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal>
      </CardContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
