import React, { useContext } from 'react';
import { Authcontext } from '../provider/Authprovider';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
  
    const {user,loading} = useContext(Authcontext);

    
    if(loading)
    {
        return <progress className='progress w-56'></progress>
    }
    if(user?.email)
    {
        return children;
    }
    
    return <Navigate to="/login" replace ></Navigate>
};

export default Privateroute;