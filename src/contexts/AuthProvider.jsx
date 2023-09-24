import { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "../rest-api/axios";
import { getCookie, setCookie } from "../utils";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(JSON.parse(getCookie('auth')) || {});
    const [user, setUser] = useState({});
    const [navigation, setNavigation] = useState([]);
    const [roles, setRoles] = useState([]);
    const [permissions, setPermissions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (auth) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`;
            setUser(auth.user)
            setNavigation(auth.navigation)
            setRoles(auth.roles)
            setPermissions(auth.permissions)
        } else {
            // Remove the auth from Axios headers
            setUser({})
            setNavigation([])
            setRoles([])
            setPermissions([])
            delete axios.defaults.headers.common['Authorization'];
        }
    }, [auth]);

    const login = async (email, password) => {
        try {
            setLoading(true);
            const { data } = await axios.post('/auth/login', { email, password });

            setCookie('auth', JSON.stringify(data), 1);
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setAuth({});
        localStorage.removeItem('auth');
        localStorage.removeItem('auth');
    };

    return (
        <AuthContext.Provider value={{
            login,
            logout,
            auth,
            setAuth,
            user,
            setUser,
            navigation,
            setNavigation,
            roles,
            setRoles,
            permissions,
            setPermissions
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;