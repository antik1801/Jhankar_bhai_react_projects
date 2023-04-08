import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import Shop from './components/Shop'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: "/shop",
                element: <Shop></Shop>,
                loader: ()=> fetch('https://raw.githubusercontent.com/antik1801/Jhankar_bhai_react_projects/main/heroGadget-starter/public/products.json'),
            },
            {
                path: "/about",
                element: <About />,
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>)
