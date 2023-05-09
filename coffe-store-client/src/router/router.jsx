import React from 'react';
import App from "../App";
import AddCoffee from '../components/AddCoffee';
import UpdateCoffee from '../components/UpdateCoffee';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    },
    {
      path: "addCoffee",
      element: <AddCoffee></AddCoffee>,
    },
    {
      path: "updateCoffee/:id",
      element: <UpdateCoffee></UpdateCoffee>,
      loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
    }
  ]);

export default router;