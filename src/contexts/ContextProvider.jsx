import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    auth: {},
    token: null,
    setAuth: () => { },
    setToken: () => { }
})

export const ContextProvider = ({ children }) => {
    const [auth, _setAuth] = useState(localStorage.getItem('auth') || '')
    const [token, setToken] = useState('')

    const setAuth = (auth) => {
        if (auth) {
            localStorage.setItem('auth', auth)
        } else {
            localStorage.removeItem('auth')
        }

        _setAuth(JSON.parse(auth))
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