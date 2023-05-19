import React, { useEffect } from 'react';
import Navigation from '../Shared/Navigation';
import Footer from '../Shared/Footer';
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Main = () => {
    const loc = useLocation();
    useEffect(()=>{
        if (loc.pathname === '/') {
          document.title = 'Toy Line BD - home'
        }
        else{
          document.title = `Toy Line BD ${loc.pathname.replace("/","- ")}`;
        }
        if (loc.state) {
          document.title = loc.state
        }
      },[loc])
    return (
        <div>
            <Navigation></Navigation>
            <div className='min-h-[calc(100vh-275px)]'>
            <Outlet></Outlet>
            </div>
            <div data-aos="zoom-in">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;