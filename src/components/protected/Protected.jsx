import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthenticationContext } from '../services/authentication/authentication.context'

const Protected = ({children}) => {
    const { userData } = useContext(AuthenticationContext)

    if (!userData) {
        return <Navigate to="/login" replace />
    } else {
        return children;
    }
}

export default Protected