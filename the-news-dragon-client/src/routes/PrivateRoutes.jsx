import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Spinner animation="grow" variant="danger" />
    }
    if (user) {
        return children
    }
    return <Navigate state={{from:location}} to={'/login'} replace></Navigate>

};

export default PrivateRoutes;