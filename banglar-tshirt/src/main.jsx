import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Layout from './components/Layout/Layout';
import OrderReview from './components/OrderReview/OrderReview';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('tshirts.json'),
      },
      {
        path: "review",
        element: <OrderReview></OrderReview>,
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
