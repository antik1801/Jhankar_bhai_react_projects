import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate,  useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const PrivateRoute = ({children}) => {
  const navigate = useNavigate()
  const location = useLocation()
  
   const {user,loading} = useContext(AuthContext)
   if (loading) {
    return <progress className="progress w-56"></progress>;
   }
   if(user){
    return children;
   }
  toast('Please login first!')
  return <Navigate to={"/login"} state={{from:location }} replace></Navigate>

};

export default PrivateRoute;