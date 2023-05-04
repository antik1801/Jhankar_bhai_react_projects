import React from "react";
import Header from "../components/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import GridLeft from "../components/gridLeft/GridLeft";

const BookingLayout = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 my-container'>
            <div className="font-bebus">
               <GridLeft></GridLeft>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    </div>
  );
};

export default BookingLayout;
