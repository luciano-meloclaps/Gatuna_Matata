import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    const handleLogin = (data) => {
        setUserData(data);
    }

    const handlerLogout = () => {
        setUserData(null);
    }

    return (
        <AuthenticationContext.Provider value={{ userData, handleLogin, handlerLogout}}>
            {children}
        </AuthenticationContext.Provider>
    )
}
