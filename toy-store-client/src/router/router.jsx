import React, { useContext } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/SinglePages/Login";
import SignUp from "../Pages/SinglePages/SignUp";
import AllToys from "../Pages/SinglePages/AllToys";
import MyToys from "../Pages/SinglePages/MyToys";
import AddAToy from "../Pages/SinglePages/AddAToy";
import Blog from "../Pages/SinglePages/Blog";
import About from "../Pages/SinglePages/About";
import SingleToy from "../Pages/SinglePages/SingleToy";
import { AuthContext } from "../ContextProviders/AuthProviders";
import PrivateRoutes from "./PrivateRoutes";
import AllProducts from "../Pages/SinglePages/AllProducts";
import EditToy from "../Pages/SinglePages/EditToy";
import CategoryWiseToys from "../Pages/SinglePages/CategoryWiseToys";
import ErrorPage from "../Pages/SinglePages/ErrorPage";
// const {user} = useContext(AuthContext)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/alltoys",
        element: (
          <PrivateRoutes>
            <AllToys></AllToys>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://toy-store-server-ashy.vercel.app/totalToys"),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
        // loader: ()=> fetch(`https://toy-store-server-ashy.vercel.app/sellerTotal?email=${user?.email}`),
      },
      {
        path: "/addatoy",
        element: (
          <PrivateRoutes>
            <AddAToy></AddAToy>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/allToys/:id",
        element: (
          <PrivateRoutes>
            <SingleToy></SingleToy>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-store-server-ashy.vercel.app/allToys/${params.id}`
          ),
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/editToy/:id",
        element: <EditToy></EditToy>,
        loader: ({ params }) =>
          fetch(
            `https://toy-store-server-ashy.vercel.app/allToys/${params.id}`
          ),
      },
      {
        path: "/categoryToys/:search",
        element: <PrivateRoutes> <CategoryWiseToys></CategoryWiseToys></PrivateRoutes>,
        loader: ({params})=>fetch(`https://toy-store-server-ashy.vercel.app/category?subCategory=${params.search}`)
      },
    ],
  },
]);

export default router;
