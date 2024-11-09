import {createContext, useContext, useState } from "react";


// create a context 
export const AuthContext = createContext();

// context provide
export const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser]=useState(JSON.parse(localStorage.getItem("chat-user")) || null)

    return <AuthContext.Provider value={{authUser, setAuthUser}}>
        {children}
    </AuthContext.Provider>
}

// consume the value
export const useAuthContext = () => {
    return useContext(AuthContext)
}