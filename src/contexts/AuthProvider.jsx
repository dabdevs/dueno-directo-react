import { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import refreshToken from "../rest-api/refresh-token";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(localStorage.getItem("auth") || null)
    const [navigation, setNavigation] = useState([{
        'name': 'Dashboard',
        'endpoint': '/dashboard'
    }])
    
    // const decoded = auth?.token ? jwt_decode(auth.token) : undefined;

    // console.log('decode', decoded)

    useEffect(() => {
        if (auth) {
            const authData = JSON.parse(auth);

            console.log('Setting Auth state')
            setAuth(authData);

            console.log('Setting Navigation')
            setNavigation(authData.user.navigation)

            // const timer = setInterval(async () => {
            //     const token = JSON.parse(auth).token
            //     console.log('timer', token)
            //     const newToken = await refreshToken(token);
            //     console.log('new token', newToken)
            //     //auth.token = newToken
            //     // auth.exp = exp
            //     //setAuth(auth)
            // }, 1000);

            // return () => {
            //     clearInterval(timer);
            // };
        }
    }, []);

    const logout = () => {
        console.log('log out...')
        localStorage.removeItem('auth');
        setAuth(null)
        return < Navigate to={'/guest/login'} />
    }

    return (
        <AuthContext.Provider value={{
            auth,
            setAuth,
            logout,
            navigation,
            setNavigation
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;