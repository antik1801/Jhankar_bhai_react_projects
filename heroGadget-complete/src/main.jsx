import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AuthProviders from "./providers/AuthProviders";
import router from "./router/router";


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster />
    <AuthProviders>
    <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </>
);
