import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavScrollExample from "./components/Navbar/Navbar";
import Connector from "./components/Connector/Connector";
import Header from "./components/Header/Header";
import Accordings from "./components/Accordings/Accordings";
import SinglePlayer from "./components/SinglePlayer/SinglePlayer";

// const router = createBrowserRouter ([
//   {
//     path: '/',
//     element: <RouteConnectors></RouteConnectors>,
//     children: [
//       {
//         path: '/',
//         element: <App></App>,
//       },
//       {
//         path: '/accordings',
//         element: <BasicExample></BasicExample>,
//       },
//     ]
//   },
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <Connector></Connector>,
    children: [
      {
        path: '/',
        element: <Header></Header>,
      },
      {
        path: '/about',
        element: <h2>This is a about section</h2>,
      },
      {
        path: '/contact',
        element: <h2>This is a content section</h2>
      },
      {
        path: '/friends',
        element: <h2>This is a friends section.</h2>
      },
      {
        path:"/accordings",
        element: <Accordings></Accordings>,
      },
      {
        path:'/singlePlayer/:singlePlayerId',
        element: <SinglePlayer></SinglePlayer>,
        loader: async ({params})=>{
          const data = await fetch('player.json')
          const res = await data.json()
          return res.filter(item=> item._id === params.singlePlayerId)
        },     
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
