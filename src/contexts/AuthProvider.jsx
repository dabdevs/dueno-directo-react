import { createContext, useState } from "react";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, _setAuth] = useState(localStorage.getItem('auth') || null)

    const setAuth = (auth) => {
        if (auth) {
            localStorage.setItem('auth', JSON.stringify(auth))
        } else {
            localStorage.removeItem('auth')
        }

        _setAuth(auth)
    }

    return (
        <AuthContext.Provider value={{ 
            auth,
            setAuth
         }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;