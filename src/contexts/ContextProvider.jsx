import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    auth: {},
    token: null,
    setAuth: () => { },
    setToken: () => { }
})

export const ContextProvider = ({ children }) => {
    const [auth, _setAuth] = useState(localStorage.getItem('token') || null)
    const [token, setToken] = useState('')

    const setAuth = (auth) => {
        if (auth) {
            localStorage.setItem('token', auth)
        } else {
            localStorage.removeItem('token')
        }

        _setToken(JSON.parse(auth))
    }
    return (
        <StateContext.Provider value={{
            auth,
            setAuth,
            token,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)