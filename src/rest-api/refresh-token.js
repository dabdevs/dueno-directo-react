import { useContext, useState } from "react";
import axios from "./axios";
import AuthContext from "../contexts/AuthProvider";


const refreshToken = async () => {
    console.log('refresh token function')
    const {auth} = useContext(AuthContext)
    const token = auth.token
    console.log('Refreshing token', token)

    try {
        const response = await axios.post("/auth/refresh-token", {}, {withCredentials: true});

        return response
    } catch (error) {
        throw error;
        //localStorage.removeItem("auth");
    }
}

export default refreshToken;