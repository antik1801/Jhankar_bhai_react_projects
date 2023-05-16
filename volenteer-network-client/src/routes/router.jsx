import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Pages/Home';
import Signup from '../Pages/SignUp/Signup';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: '/signup',
                element: <Signup></Signup>,
            }
        ]
    }
])

export default router;