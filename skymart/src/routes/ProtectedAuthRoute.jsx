import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';

const ProtectedAuthRoute = ({ children }) => {

    const { user } = useContext(AuthContext)

    if (user) { 
        return <Navigate to={"/"} />
    }

    return children
}

export default ProtectedAuthRoute

