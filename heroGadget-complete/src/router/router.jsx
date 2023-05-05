import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Shop from "../components/Shop";
import About from "../components/About";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import Carts from "../components/Carts";
import Login from "../components/Login";
import Register from "../components/Register";
import { productsAndCartData } from "../loaders/getCartAndProductData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: productsAndCartData,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
        loader: () => fetch("https://hero-gadgets-server-antik1801.vercel.app/products"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <Carts></Carts>
          </PrivateRoutes>
        ),
        loader: productsAndCartData,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
