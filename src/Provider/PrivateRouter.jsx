import React, { use } from 'react';
import { AuthContex } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
    const { user, loading } =use(AuthContex);
    const location=useLocation();
    if(loading){
        return <p>hi</p>
    };
    if(user && user?.email){
        return children
    }
    return <Navigate te={location.pathname} to="/login"></Navigate>
};

export default PrivateRouter;