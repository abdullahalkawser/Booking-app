import React, {useContext } from 'react';

import { Navigate,useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/Provider';

const PrivateRoute = ({children}) => {

    const location = useLocation()
    console.log(location.pathname)
    const {user} = useContext(AuthContext)
    

   

    if (user) {
        return children
        
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoute;