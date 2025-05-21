import React, { use } from 'react';
import { AuthContex } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loding from '../Component/Loding';

const PrivateRouter = ({children}) => {
    const { user, loading } =use(AuthContex);
    const location=useLocation();
    if(loading){
        return <Loding></Loding>
    };
    if(user && user?.email){
        return children
    }
    return <Navigate te={location.pathname} to="/login"></Navigate>
};

export default PrivateRouter;