import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import HomePage from '../Pages/Homepage/HomePage';

const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element:<HomePage></HomePage>,
            }
        ]
    }
])

export default router;