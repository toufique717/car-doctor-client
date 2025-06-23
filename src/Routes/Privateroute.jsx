import React, { useContext } from 'react';
import { Authcontext } from '../provider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
  
    const {user,loading} = useContext(Authcontext);
    const location = useLocation();

    
    if(loading)
    {
        return <progress className='progress w-56'></progress>
    }
    if(user?.email)
    {
        return children;
    }
    
    return <Navigate state={location.pathname} to="/login" replace ></Navigate>
};

export default Privateroute;