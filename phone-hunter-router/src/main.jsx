import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import App from "./App";
import Home from "./components/Home/Home";
import Loader from "./components/Loading/Loading";
import Phones from "./components/Phones/Phones";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/phones',
        element: <Phones></Phones>,
        loader: ()=> fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`),
      },
      {
        path: "/loading",
        element:<Loader></Loader>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
