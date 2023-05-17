import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextApi/ContextApi';

const PrivateRouter = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    

    if(user){
        return children;
    }else{
        return  <Navigate to='/signIn' state={{from:location}} replace></Navigate>
       
    }
    
};

export default PrivateRouter;