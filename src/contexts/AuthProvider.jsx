import { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "../rest-api/axios";
import { deleteCookie, getCookie, setCookie } from "../utils";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')) || null);
    const [user, setUser] = useState(null);
    const [navigation, setNavigation] = useState([]);
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (auth) {
            setUser(auth.user)
            axios.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`;
            setNavigation(auth.user.navigation)
            setRoles(auth.user.roles)
        } else {
            // Remove the auth from Axios headers
            setUser(null)
            setNavigation([])
            setRoles([])
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];
        }
    }, [auth]);

    const logout = () => {
        setAuth(null);
        localStorage.removeItem('auth');
    };

    return (
        <AuthContext.Provider value={{
            logout,
            auth,
            setAuth,
            user,
            setUser,
            navigation,
            setNavigation,
            roles,
            setRoles
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;