import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './routes/route'
import AuthProvider from './context/AuthProvider'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={route}></RouterProvider>
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>
  </div>
)
