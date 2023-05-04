import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../pages/Loading';

const PrivateRoute = ({children}) => {
  const {user,loading} = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loader></Loader>
  }
  if (user) {
    return children
  }
  toast("Please login first!")
  return <Navigate state={{from: location}} to={"/login"}></Navigate>

};

export default PrivateRoute;