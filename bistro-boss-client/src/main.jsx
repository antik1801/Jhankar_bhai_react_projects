import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/router";
import "@smastrom/react-rating/style.css";
import AuthProvider from "./ContextProviders/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-xl mx-auto">
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
      <ToastContainer></ToastContainer>
    </div>
  </React.StrictMode>
);
