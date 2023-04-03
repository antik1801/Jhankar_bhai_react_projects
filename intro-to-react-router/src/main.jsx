import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error";
import Contact from "./routes/contact";
import About from "./components/About/About";
import Contacts from "./components/Contact/Contacts";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import First from "./components/First/First";
import Friends from "./components/Friends/Friends";
import Accordings from "./components/Accordings/Accordings";



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "contacts/:contactId",
//         element: <Contact />,
//       },
//     ],
//   },
//   {
//     path: '/about',
//     element: <About></About>,
//   },
//   {
//     path: '/contact',
//     element: <Contacts></Contacts>
//   }
// ]);

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <First></First>
      },
      {
        path: "friends",
        element: <Friends></Friends>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path:'/accordings',
        element: <Accordings></Accordings>,
      }
      
    ]
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Header></Header> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
