import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom"
import router from './router/router.jsx'
import AuthProviders from './ContextProviders/AuthProviders'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import 'aos/dist/aos.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
