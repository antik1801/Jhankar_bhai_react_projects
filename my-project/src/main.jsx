import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home/Home'
import Error from './component/ErrorPage/ErrorPage'
import Meals from './component/Meals/Meals'
import About from './component/About/About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/meals",
        element: <Meals></Meals>,
        loader: () => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=egg`)
      },
      {
        path: "/meals/:name",
        element: <Meals></Meals>,
        fetch: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
      },
      {
        path: "/about",
        element: <About></About>,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
