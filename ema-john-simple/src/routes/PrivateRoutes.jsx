import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    if (loading) {
        return <h1 className='loading-text'>Loading...</h1>
    }
    if (user) {
        return children;
    }
   return <Navigate to={"/login"} state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;