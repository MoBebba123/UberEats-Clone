import React from 'react';
import {  Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAdmin ,children ,userInfo }) => {

    if(isAdmin ===  true ){
        return userInfo && userInfo.isAdmin ? children : <Redirect to="/login" />;
    }else{   
        return userInfo ? children : <Redirect to="/login" />;
    }
};

export default PrivateRoute;
