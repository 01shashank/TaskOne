import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthenticationService from './AuthenticationService';

const AuthenticatedRoute = () => {
    const auth = AuthenticationService.isUserLoggedIn(); 
    return  auth? <Outlet/> : <Navigate to="/login" />;
}


export default AuthenticatedRoute;