import { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null)

    useEffect(() => {
        const auth = localStorage.getItem("auth");
        if (auth) {
            const data = JSON.parse(auth);
            setAuth(data);
        }
    }, []);
   
    // const setAuth = (auth) => {
    //     if (auth) {
    //         localStorage.setItem('auth', JSON.stringify(auth))
    //     } else {
    //         localStorage.removeItem('auth')
    //     }

    //     _setAuth(auth)
    // }

    const logout = () => {
        console.log('logging outt...')
        localStorage.removeItem('auth');
        setAuth(null)
        return < Navigate to={'/guest/login'} />
    }

    return (
        <AuthContext.Provider value={{ 
            auth,
            setAuth,
            logout
         }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;