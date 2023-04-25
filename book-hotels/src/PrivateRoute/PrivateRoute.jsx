import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import Loading from '../pages/shared/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if (loading) {
        return <Loading></Loading>
    }
    if(user){
        return children;
    }
};

export default PrivateRoute;