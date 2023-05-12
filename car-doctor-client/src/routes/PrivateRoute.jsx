import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   const {user,loading} = useContext(AuthContext)
   if (loading) {
    return "Loading .......";
   }
   if(user?.email){
    return children;
   }
  return <Navigate></Navigate>

};

export default PrivateRoute;