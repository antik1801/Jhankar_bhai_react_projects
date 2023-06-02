import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'
import RoomDetails from '../Pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import AddRoom from '../Pages/Dashboard/AddRoom'
import { getRoom } from '../api/rooms';
import MyBookings from '../Pages/Dashboard/MyBookings'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path: "/rooms/:id",
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
        loader: ({params})=>getRoom(`${params.id}`) 
      },
    ]
  },
  {
    path: "/login",
    element:<Login></Login>,
  },
  {
    path:'/signup',
    element:<SignUp></SignUp>,
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path: '/dashboard/add-room',
        element: <AddRoom></AddRoom>
      },
      {
        path: '/dashboard/my-bookings',
        element: <MyBookings></MyBookings>,
      }
    ]
  }
])
