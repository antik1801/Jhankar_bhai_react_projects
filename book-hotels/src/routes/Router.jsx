import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import Features from '../pages/Features/Features';
import Rooms from '../pages/Rooms/Rooms';
import Pricing from '../pages/Pricing/Pricing';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <PrivateRoute><Home></Home></PrivateRoute>,
            },
            {
                path:"/features",
                element:<Features></Features>,
            },
            {
                path: "/rooms",
                element: <Rooms></Rooms>,
            },
            {
                path: "/pricing",
                element: <Pricing></Pricing>,
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
                path: "/home",
                element: <Home></Home>,
            },
            {
                path: "/phoneVerify",
                
            }
        ]
    }
])

export default router;