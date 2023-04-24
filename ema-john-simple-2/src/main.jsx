import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import { cartProductsLoader } from './loaders/cartProductsLoader';
import Shop from './components/shop/shop';
import Checkout from './components/Checkout/Checkout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path: "/",
        element:<Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>,

      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
 </React.StrictMode>,
)