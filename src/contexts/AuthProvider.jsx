import { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "../rest-api/axios";
import { deleteCookie, getCookie, setCookie } from "../utils";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(JSON.parse(getCookie('auth')) || null);
    const [user, setUser] = useState(null);
    const [navigation, setNavigation] = useState([]);
    const [roles, setRoles] = useState([]);
    const [permissions, setPermissions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (auth) {
            axios.defaults.headers.common['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE2OTU1ODk3NjMsImV4cCI6MTY5NTU5MzM2MywibmJmIjoxNjk1NTg5NzYzLCJqdGkiOiIxWWhQOVlLeVcxMVB2d2VQIiwic3ViIjoiMTUwMyIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.VV0Hu78feoIXcWtN8BgVV5gPXQM3VPusX135jBCUH0g`;
            setUser(auth.user)
            setNavigation(auth.navigation)
            setRoles(auth.roles)
            setPermissions(auth.permissions)
        } else {
            // Remove the auth from Axios headers
            setUser(null)
            setNavigation([])
            setRoles([])
            setPermissions([])
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];
        }
    }, [auth]);

    const login = async (email, password) => {
        try {
            setLoading(true);
            const { data } = await axios.post('/auth/login', { email, password });

            setCookie('auth', JSON.stringify(data), 1);
            setAuth(data)
            localStorage.setItem('token', data.token);
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setAuth(null);
        deleteCookie('auth')
        localStorage.removeItem('token');
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