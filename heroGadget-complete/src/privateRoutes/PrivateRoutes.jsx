import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    
    if (loading) {
        return <progress className="progress w-56" value="100" max="100"></progress>
    }
    if (user) {
        return children;
    }
    toast.error("Please login first to enter!")
    return <Navigate state={{from: location}} to={"/login"} replace></Navigate>
};

export default PrivateRoutes;