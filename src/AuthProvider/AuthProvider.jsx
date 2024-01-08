import React, { createContext } from 'react';
import { useState } from 'react';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [searchField, setSearchField] = useState('');
    console.log(searchField)
    const authInfo = {
        searchField,
        setSearchField
    }


    return (

        < AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >

    );
};

export default AuthProvider;