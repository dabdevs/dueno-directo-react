import { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

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

            console.warn('Setting Auth state')
            setAuth(authData);

            console.warn('Setting Navigation', authData.user.navigation)
            setNavigation(authData.user.navigation)
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