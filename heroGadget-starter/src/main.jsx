import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MyAbout from './components/MyAbout'
import MyHome from './components/MyHome'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
    {
        path:"/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element:<MyHome></MyHome>,
            },
            {
                path:"/about",
                element: <MyAbout></MyAbout>,
            },
            {
                path:'/about',
                element: <MyAbout></MyAbout>,
            }
        ]
    },
   
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>)
