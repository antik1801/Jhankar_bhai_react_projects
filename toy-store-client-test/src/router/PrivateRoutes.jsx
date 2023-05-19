import React, { useContext } from 'react';
import { AuthContext } from '../ContextProviders/AuthProviders';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    if (loading) {
        return <Loader></Loader>;
    }
    if (user) {
        return children
    }
    toast('You have to login first to view details!')
    return <Navigate to={"/login"} state={{from:location }} replace></Navigate>

};

export default PrivateRoutes;