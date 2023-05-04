import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import BookingLayout from "../layout/BookingLayout";
import BookingForm from "../components/BookingForm/BookingForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/booking",
        element: <BookingLayout></BookingLayout>,
        children:[
        {
          path: ":id",
          element: <BookingForm></BookingForm>,
        }
        ]
      },
      {
        
      }
    ],
  },
  
]);

export default router;
