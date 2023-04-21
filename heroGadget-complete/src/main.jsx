import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Shop from "./components/Shop";
import Carts from "./components/Carts";
import { productsAndCartData } from "./loaders/getCartAndProductData";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProviders from "./providers/AuthProviders";
import PrivateRoutes from "./privateRoutes/PrivateRoutes";

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
        loader: () => fetch("/products.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <PrivateRoutes><Carts></Carts></PrivateRoutes>,
        loader: productsAndCartData,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster />
    <AuthProviders>
    <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </>
);
